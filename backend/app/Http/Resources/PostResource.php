<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $imagePath = $this->image_url; 
        $imageUrl = $imagePath ? asset('storage/' . $imagePath) : null;
        return [
                'id'          => $this->id,
                'title'       => $this->title,
                'content'     => $this->content,
                'author'      => $this->author,
                'image_url'   =>  $imageUrl,
                'published_at'=> $this->published_at,
                'created_at'  => $this->created_at,
                'updated_at'  => $this->updated_at,
        ];
    }
}
