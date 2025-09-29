<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

/**
 * @mixin \Illuminate\Support\Testing\Fakes\FakeStorage
 */
class PostApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that the API can successfully list posts (publicly accessible).
     */
    public function test_it_can_list_posts(): void
    {
        Post::factory()->count(3)->create();

        $response = $this->getJson('/api/posts');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => ['id', 'title', 'content', 'author', 'image_url', 'published_at', 'created_at', 'updated_at']
                     ],
                     'links',
                     'meta'
                 ]);
    }

    /**
     * Test that a user can successfully create a new post.
     */
    public function test_it_can_create_a_post(): void
    {
        $payload = [
            'title'   => 'My First Post',
            'content' => 'This is the body of the post.',
            'author'  => 'Yasin',
        ];

        $response = $this->postJson('/api/posts', $payload);

        // Expect 201 Created if the route is public
        $response->assertStatus(201)
                 ->assertJsonPath('data.title', 'My First Post')
                 ->assertJsonPath('data.author', 'Yasin')
                 ->assertJsonPath('data.image_url', null);
    }

    /**
     * Test that a user can successfully create a new post with an image.
     */
    public function test_it_can_create_a_post_with_an_image(): void
    {
        Storage::fake('public'); // Mock the public disk

        $file = UploadedFile::fake()->image('post-image.jpg', 600, 400);

        $payload = [
            'title'   => 'Post with Image',
            'content' => 'Content with an image.',
            'author'  => 'Yasin',
            'image'   => $file, // Attach the fake image file
        ];

        $response = $this->postJson('/api/posts', $payload);

        // Expect 201 Created if the route is public
        $response->assertStatus(201)
                 ->assertJsonPath('data.title', 'Post with Image')
                 ->assertJsonPath('data.image_url', 'posts/' . $file->hashName());

        // Assert that the image file exists in storage
        /** @noinspection PhpUndefinedMethodInspection */
        Storage::disk('public')->assertExists('posts/' . $file->hashName());
    }

    /**
     * Test that the API validates required fields when creating a post.
     */
    public function test_it_validates_required_fields_when_creating_post(): void
    {
        $response = $this->postJson('/api/posts', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['title', 'content', 'author']);
    }

    /**
     * Test that a user can successfully update an existing post.
     */
    public function test_it_can_update_a_post(): void
    {
        $post = Post::factory()->create();

        $payload = [
            'title'   => 'Updated Title',
            'content' => 'Updated content',
            'author'  => 'Updated Author',
        ];

        $response = $this->putJson("/api/posts/{$post->id}", $payload);

        // Expect 200 OK if the route is public
        $response->assertStatus(200)
                 ->assertJsonPath('data.title', 'Updated Title')
                 ->assertJsonPath('data.author', 'Updated Author');

        $this->assertDatabaseHas('posts', [
            'id'     => $post->id,
            'title'  => 'Updated Title',
            'author' => 'Updated Author',
        ]);
    }

    /**
     * Test that a user can update an existing post with a new image.
     */
    public function test_it_can_update_a_post_with_a_new_image(): void
    {
        Storage::fake('public');

        // Create an existing post with an old image file
        $oldFile = UploadedFile::fake()->image('old-image.jpg');
        $oldPath = $oldFile->store('posts', 'public');
        $oldPost = Post::factory()->create(['image_url' => $oldPath]);

        $newFile = UploadedFile::fake()->image('new-image.jpg');

        $payload = [
            'title'   => 'Updated Title with New Image',
            'content' => 'Updated content with new image',
            'image'   => $newFile,
        ];

        $response = $this->postJson("/api/posts/{$oldPost->id}?_method=PUT", $payload);

        $response->assertStatus(200)
                 ->assertJsonPath('data.title', 'Updated Title with New Image');

        // Assert the new image exists and the old one is deleted
        /** @noinspection PhpUndefinedMethodInspection */
        Storage::disk('public')->assertExists('posts/' . $newFile->hashName());
        /** @noinspection PhpUndefinedMethodInspection */
        Storage::disk('public')->assertMissing($oldPath);
    }

    /**
     * Test that a user can successfully delete a post.
     */
    public function test_it_can_delete_a_post(): void
    {
        $post = Post::factory()->create();

        $response = $this->deleteJson("/api/posts/{$post->id}");

        $response->assertNoContent();

        $this->assertDatabaseMissing('posts', ['id' => $post->id]);
    }

    /**
     * Test that the associated image is deleted when a post is deleted.
     */
    public function test_it_deletes_image_when_post_is_deleted(): void
    {
        Storage::fake('public');

        $file = UploadedFile::fake()->image('post-to-delete.jpg');
        $path = $file->store('posts', 'public');
        $post = Post::factory()->create(['image_url' => $path]);

        $this->deleteJson("/api/posts/{$post->id}")
             ->assertNoContent();

        $this->assertDatabaseMissing('posts', ['id' => $post->id]);

        Storage::disk('public')->assertMissing($path);
    }
}