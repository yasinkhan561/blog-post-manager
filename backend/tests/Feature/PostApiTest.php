<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostApiTest extends TestCase
{
    use RefreshDatabase;

     public function test_it_can_list_posts(): void
    {
        Post::factory()->count(3)->create();

        $response = $this->getJson('/api/posts');

        $response->assertStatus(200)
                 ->assertJsonStructure(['data', 'links', 'meta']);
    }

    public function test_it_can_create_a_post(): void
    {
        $payload = [
            'title'   => 'My First Post',
            'content' => 'This is the body of the post.',
            'author'  => 'Yasin',
        ];

        $response = $this->postJson('/api/posts', $payload);

        $response->assertStatus(201)
                 ->assertJsonPath('data.title', 'My First Post')
                 ->assertJsonPath('data.author', 'Yasin');

        $this->assertDatabaseHas('posts', $payload);
    }

    public function test_it_validates_required_fields_when_creating_post(): void
    {
        $response = $this->postJson('/api/posts', []);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['title', 'content', 'author']);
    }

    public function test_it_can_update_a_post(): void
    {
        $post = Post::factory()->create();

        $payload = [
            'title'   => 'Updated Title',
            'content' => 'Updated content',
            'author'  => 'Updated Author',
        ];

        $response = $this->putJson("/api/posts/{$post->id}", $payload);

        $response->assertStatus(200)
                 ->assertJsonPath('data.title', 'Updated Title')
                 ->assertJsonPath('data.author', 'Updated Author');

        $this->assertDatabaseHas('posts', [
            'id'     => $post->id,
            'title'  => 'Updated Title',
            'author' => 'Updated Author',
        ]);
    }

    public function test_it_can_delete_a_post(): void
    {
        $post = Post::factory()->create();

        $response = $this->deleteJson("/api/posts/{$post->id}");

        $response->assertNoContent();

        $this->assertDatabaseMissing('posts', ['id' => $post->id]);
    }
}