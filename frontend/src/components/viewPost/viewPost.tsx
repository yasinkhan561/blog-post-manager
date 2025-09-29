import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PostContainer,
  ImageContainer,
  PostImage,
  PlaceholderImage,
  PostTitle,
  PostMeta,
  PostContent,
} from "./viewPostStyles";
import ErrorPage from "@/components/errorBoundary/errorPage/ErrorPage";
import Loader from "@/components/shared/Loader";
import { RootState } from "@/redux/store";
import noImagePlaceholder from "@/assets/images/no-image-placeholder.svg";
import NavigationBar from "../shared/navigation/navigationBar/NavigationBar";
import Navigation from "../shared/navigation/Navigation";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url?: string;
  created_at?: string;
}

const PLACEHOLDER_URL = noImagePlaceholder;

const ViewPost = () => {
  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  const isError = useSelector((state: RootState) => state.posts.isError);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = useSelector((state: RootState) =>
    state.posts.postList.find((p) => p.id === Number(id))
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !post) {
    return (
      <ErrorPage
        errorMessage={"Something went wrong"}
        handleGoBack={() => navigate("/")}
        handleTryAgain={() => navigate(`/posts/${id}`)}
      />
    );
  }

  const PostImageComponent =
    post.image_url && post.image_url !== PLACEHOLDER_URL
      ? PostImage
      : PlaceholderImage;

  return (
    <>
      <NavigationBar>
        <Navigation />
      </NavigationBar>
      <PostContainer>
        <ImageContainer>
          <PostImageComponent
            src={post.image_url ?? undefined}
            alt={post.title}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = PLACEHOLDER_URL;
            }}
          />
        </ImageContainer>

        {/* Title and Meta */}
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          By <strong>{post.author} </strong>
          {new Date(post?.created_at ?? "").toLocaleDateString()}
        </PostMeta>

        {/* Content */}
        <PostContent>
          {/* Assuming content is plain text. Use a library like 'dompurify' if rendering rich HTML. */}
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </PostContent>
      </PostContainer>
    </>
  );
};

export default ViewPost;
