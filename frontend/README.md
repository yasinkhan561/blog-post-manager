Frontend Application: React & Redux Toolkit
This folder contains the client-side application for the Blog Post Manager, built with React, TypeScript, and Redux Toolkit for robust state management.

🛠️ Tech Stack Overview
Area Technologies Used
Framework React (via Vite)
State Management Redux Toolkit, React-Redux
Styling Styled-Components
Routing React Router DOM v7
Data Fetching Axios
Utilities Lodash
Icons Font Awesome (Free Solid)

Export to Sheets
🚀 Local Setup & Installation
Follow these steps to get the frontend server running locally. Ensure you have started the Dockerized backend API first.

1. Install Dependencies
   Navigate to this frontend directory and install all required packages:

Bash

npm install

# or

yarn install

2. Run the Development Server

Start the application using Vite:

Bash

npm run dev

# or

yarn start

The application will typically be available at http://localhost:3000.

✨ Core Features & Implementation Details

1. State Management (Redux Toolkit)
   All application data is managed via Redux Toolkit slices, with API interactions handled using Async Thunks to manage loading and error states.

Efficient Updates: The updatePostAction is optimized for performance. Instead of triggering a full data re-fetch after a successful save, it dispatches a local updatePost action to instantly modify only the specific post in the Redux state. This avoids unnecessary network overhead.

Data Synchronization (Creation): The createPostAction performs a full list fetch (dispatch(fetchPosts())) after a successful creation to guarantee the main list is synchronized before redirecting to the new post's detail page.

3. Iconography (Font Awesome)
   Icons are managed using @fortawesome/react-fontawesome for high-quality SVG rendering.

Custom Component: The custom Icon component simplifies usage across the application, handling consistent styling (color, size) based on theme variables.

📂 Project Structure Highlights

Path Purpose
src/store/ Redux setup, including slices, store configuration, and types.
src/components/shared/Icon.tsx The reusable component for displaying Font Awesome icons.
src/components/shared/messageBanner/ The custom notification component and its styles.
src/api/ Axios instances and dedicated functions for all backend API calls.
