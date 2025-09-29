🐘 Backend Application: Laravel Sail API
This folder contains the blog post manager backend, built using the Laravel PHP framework. The entire environment (PHP, web server, MySQL database) is containerized using Docker and managed via Laravel Sail.

🛠️ Tech Stack Overview

Component Version/Tool Purpose
Framework Laravel Core API logic and routing.
Environment PHP 8.4 PHP Runtime.
Containerization Docker / Laravel Sail Local development environment management.
Database MySQL 8.0 Data persistence for posts.

🚀 Local Environment Setup (Laravel Sail)

1. Prerequisites
   You must have Docker Desktop installed and running on your system.

2. Environment Configuration
   Ensure your environment variables are correctly configured:

Make a copy of the example environment file:

Bash

cp .env.example .env
Review and update the following variables in your new .env file:

APP_URL (Should match the frontend's base URL if necessary)

DB_DATABASE, DB_USERNAME, DB_PASSWORD (These are used by the MySQL service in docker-compose.yml)

3. Build and Start Containers
   Navigate to the backend directory and start all services using the Sail command:

Bash

# Start all containers in the background

./vendor/bin/sail up -d
(Note: The first time, this command will take several minutes to build the PHP 8.4 image.)

4. Database Setup
   Once the containers are running (check docker ps), execute the database migrations and seeders inside the Laravel container:

Bash

# Run database migrations

./vendor/bin/sail artisan migrate

# Optional: Run seeders to populate initial data

./vendor/bin/sail artisan db:seed
The API should now be running and accessible, typically via the port defined in your .env (default is port 80).

💻 Working with Sail
To execute any Laravel/PHP commands (e.g., artisan, composer, phpunit), prefix them with ./vendor/bin/sail.

Command Purpose
./vendor/bin/sail up -d Starts the containers.
./vendor/bin/sail stop Stops the containers.
./vendor/bin/sail down Stops and removes containers, networks, and volumes.
./vendor/bin/sail composer install Installs PHP dependencies inside the container.
./vendor/bin/sail artisan test Runs PHPUnit tests.
./vendor/bin/sail tinker Starts the Laravel REPL console.

📡 API Endpoints (Blog Posts)

The following CRUD (Create, Read, Update, Delete) endpoints are available for managing blog posts.

Method Endpoint Description Frontend Action
GET /api/posts Retrieves a list of all blog posts. fetchPostsAction
POST /api/posts Creates a new blog post. Requires FormData payload. createPostAction
GET /api/posts/{id} Retrieves a single blog post by ID. fetchPostDetailAction
PUT/PATCH /api/posts/{id} Updates an existing blog post. Requires FormData payload. updatePostAction
DELETE /api/posts/{id} Deletes a blog post by ID. deletePostAction
