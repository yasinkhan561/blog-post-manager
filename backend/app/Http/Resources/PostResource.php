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
        return [
                'id'          => $this->id,
                'title'       => $this->title,
                'content'     => $this->content,
                'author'      => $this->author,
                'published_at'=> $this->published_at,
                'created_at'  => $this->created_at,
                'updated_at'  => $this->updated_at,
        ];
    }
}
