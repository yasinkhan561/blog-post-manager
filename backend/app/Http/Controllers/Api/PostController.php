<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PostResource::collection(Post::latest()->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        
        $validatedData = $request->validated();

        if ($request->hasFile('image')) {
            $validatedData['image_url'] = $this->uploadImage($request->file('image'));
        }

        $post = Post::create($validatedData);

        return new PostResource($post);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $validatedData = $request->validated();

        if ($request->hasFile('image')) {
            // Delete the old image if it exists
            if ($post->image_url) {
                Storage::disk('public')->delete($post->image_url);
            }
            $validatedData['image_url'] = $this->uploadImage($request->file('image'));
        }

        $post->update($validatedData);

        return new PostResource($post);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        // Delete the associated image from storage
        if ($post->image_url) {
            Storage::disk('public')->delete($post->image_url);
        }

        $post->delete();

        return response()->noContent();
    }

    /**
     * Helper method to upload an image and return its path.
     *
     * @param \Illuminate\Http\UploadedFile $image
     * @return string
     */
    protected function uploadImage($image): string
    {
        return $image->store('posts', 'public');
    }
}