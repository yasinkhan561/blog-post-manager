import { RouterProvider, createHashRouter } from "react-router-dom";
import { useEffect, useMemo } from "react";
import PostList from "../postList/postList";
import CreatePost from "../createPost/createPost";
import ViewPost from "../viewPost/viewPost";
import ErrorPage from "../errorBoundary/errorPage/ErrorPage";
import { StyledPostManager } from "./PostManagerStyles";
import EditPost from "../editPost/editPost";
import BubbleError from "../errorBoundary/BubbleError";

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
    path: "/posts/:id/edit",
    element: <EditPost />,
  },
  {
    path: "/posts/:id",
    element: <ViewPost />,
  },

  {
    path: "*",
    element: (
      <ErrorPage
        errorTitle="404 Error"
        errorMessage={"page not found"}
        handleGoBack={() => (window.location.hash = "#/")}
      />
    ),
  },
];

const PostManager = () => {
  const router = createHashRouter(
    routes.map((route) => ({ errorElement: <BubbleError />, ...route }))
  );

  return (
    <StyledPostManager>
      <RouterProvider router={router} />
    </StyledPostManager>
  );
};

export default PostManager;
