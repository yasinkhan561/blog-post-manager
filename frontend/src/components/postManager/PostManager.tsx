import { RouterProvider, createHashRouter } from "react-router-dom";
import { useEffect } from "react";
import PostList from "../postList/postList";
import CreatePost from "../createPost/createPost";
import ViewPost from "../viewPost/viewPost";
import ErrorPage from "../errorBoundary/errorPage/errorPage";
import { StyledPostManager } from "./PostManagerStyles";

const routes = [
  {
    path: "/",
    element: <PostList />,
  },
  {
    path: "/create",
    element: <CreatePost />,
  },
  {
    path: "/post/:id",
    element: <ViewPost />,
  },

  {
    path: "*",
    element: (
      <ErrorPage
        errorMessage={"404 page not found"}
        handleGoBack={() => (window.location.hash = "#/")}
      />
    ),
  },
];

const PostManager = () => {
  const router = createHashRouter(routes);

  return (
    <StyledPostManager>
      <RouterProvider router={router} />
    </StyledPostManager>
  );
};

export default PostManager;
