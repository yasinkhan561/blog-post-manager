<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    protected $model = \App\Models\Post::class;

    public function definition(): array
    {
        return [
            'title'        => $this->faker->sentence(6),
            'content'      => $this->faker->paragraphs(3, true),
            'author'       => $this->faker->name(),
            'image_url'    => $this->faker->imageUrl(640, 480, 'posts', true),
            'published_at' => $this->faker->optional()->dateTimeThisYear(),
        ];
    }
}
