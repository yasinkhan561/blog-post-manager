import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import PostItem from "./postItem/postItem";
import { StyledPostsContainer, StyledStatusMessage } from "./postListStyles";
import Loader from "@/components/shared/Loader";
import { deletePostAction, fetchPosts } from "@/redux/posts/actionCreators";

const PostList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postList = useSelector((state: RootState) => state.posts.postList);
  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  const isError = useSelector((state: RootState) => state.posts.isError);

  // Fetch posts only if the list is empty
  useEffect(() => {
    if (postList.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, postList.length]);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePostAction(id));
    }
  };

  if (isLoading) return <Loader />;
  if (isError) return <StyledStatusMessage>Something went wrong. Please try again.</StyledStatusMessage>;

  return (
    <StyledPostsContainer>
      {postList.map((post) => (
        <PostItem key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </StyledPostsContainer>
  );
};

export default PostList;
