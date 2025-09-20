<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use illuminate\Database\factories\Factory;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        Post::factory()->count(50)->create(); // creates 50 dummy posts
    }
}
