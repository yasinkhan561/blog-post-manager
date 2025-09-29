import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import PostItem from "./postItem/postItem";
import { StyledPostsContainer, StyledStatusMessage } from "./postListStyles";
import Loader from "@/components/shared/Loader";
import { deletePostAction, fetchPosts } from "@/redux/posts/actionCreators";

import NavigationBar from "../shared/navigation/navigationBar/NavigationBar";
import Navigation from "../shared/navigation/Navigation";
import NavigationTab from "../shared/navigation/navigationTab/NavigationTab";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PostList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postList = useSelector((state: RootState) => state.posts.postList);
  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  const isError = useSelector((state: RootState) => state.posts.isError);

  const hasFetched = useRef(false);
  // Fetch posts only if the list is empty
  useEffect(() => {
    if (postList.length === 0 && !hasFetched.current) {
      hasFetched.current = true;
      dispatch(fetchPosts());
    }
  }, [dispatch, postList.length]);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePostAction(id));
    }
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <StyledStatusMessage>
        Something went wrong. Please try again.
      </StyledStatusMessage>
    );

  return (
    <>
      <NavigationBar>
        <Navigation isStartPage>
          <NavigationTab
            icon={faPlus}
            text={"Create Post"}
            navigateTo="create"
          />
        </Navigation>
      </NavigationBar>
      <StyledPostsContainer>
        {postList.map((post) => (
          <PostItem key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </StyledPostsContainer>
    </>
  );
};

export default PostList;
