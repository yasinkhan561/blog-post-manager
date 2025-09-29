import React, { FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { updatePostAction } from "@/redux/posts/actionCreators";
import { useNavigate, useParams } from "react-router-dom";
import Loader, { ButtonSpinner } from "@/components/shared/Loader";
import StyledButton from "@/components/shared/buttons/StyledButton";
import MessageBanner from "@/components/shared/messageBanner/MessageBanner";
import MessageType from "@/constants/MessageType";
import {
  StyledButtonContainer,
  StyledCreatePostSection,
  StyledPageTitle,
} from "../createPost/createPostStyles";
import TextField from "@/components/shared/form/textField/TextField";
import TextArea from "@/components//shared/form/textArea/TextArea";
import FileUpload from "@/components/shared/form/fileInput/FileUpload";
import { setIsError } from "@/redux/posts";
import { usePostForm } from "@/hooks/usePostForm";
import { Post, PostPayload } from "@/types/post";
import NavigationBar from "../shared/navigation/navigationBar/NavigationBar";
import ErrorPage from "../errorBoundary/errorPage/ErrorPage";
import Navigation from "../shared/navigation/Navigation";

type PostFromState = Omit<Post, "image_url"> & {
  image_url: string | null | undefined;
};

const selectPostById = (
  state: RootState,
  id: number
): PostFromState | undefined =>
  state.posts.postList.find((p) => p.id === id) as PostFromState | undefined;

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const existingPost: PostFromState | undefined = useSelector(
    (state: RootState) => selectPostById(state, postId)
  );

  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  const isError = useSelector((state: RootState) => state.posts.isError);

  // 2. Use the custom hook, passing the existing post data for initialization
  const {
    formData,
    haveValidationError,
    setClientErrors,
    getFieldError,
    handleChange,
    handleImageSelect,
    handleBlur,
    validateForm,
  } = usePostForm(existingPost);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(setIsError(false));

    // Validation is handled by the hook
    if (!validateForm()) {
      return;
    }

    if (!existingPost) return;

    const payload = new FormData();

    payload.append("_method", "PUT");
    payload.append("title", formData.title);
    payload.append("content", formData.content);
    payload.append("author", formData.author);

    // Only append the new image file if one was selected
    if (formData.image) {
      payload.append("image", formData.image);
    }

    const result: any = await dispatch(
      updatePostAction(postId, payload as FormData)
    );

    if (result.success) {
      navigate(`/posts/${postId}`);
    } else {
      setClientErrors({});
    }
  };

  if (!existingPost) {
    return (
      <ErrorPage
        errorMessage="Post Not Found"
        handleGoBack={() => navigate("/")}
        handleTryAgain={() => navigate(`/posts/${postId}/edit`)}
      />
    );
  }

  return (
    <>
      <NavigationBar>
        <Navigation />
      </NavigationBar>
      {isError && (
        <MessageBanner type={MessageType.ERROR} isVisible={isError}>
          Failed to update post. Please check the server logs.
        </MessageBanner>
      )}
      <StyledCreatePostSection
        as="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <StyledPageTitle>Edit Post #{existingPost.id}</StyledPageTitle>

        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("title", e.target.value)
          }
          onBlur={handleBlur}
          placeholder="Enter post title"
          error={getFieldError("title")}
        />
        <TextArea
          placeholder="Content"
          label="Content"
          name="content"
          value={formData.content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleChange("content", e.target.value)
          }
          onBlur={handleBlur}
          error={getFieldError("content")}
        />
        <TextField
          label="Author"
          name="author"
          value={formData.author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("author", e.target.value)
          }
          onBlur={handleBlur}
          placeholder="Enter author name"
          error={getFieldError("author")}
        />
        <FileUpload
          label="Replace Post Image"
          initialPreview={existingPost.image_url || undefined}
          onFileSelect={handleImageSelect}
          error={getFieldError("image")}
        />
        <StyledButtonContainer>
          <StyledButton
            type="button"
            $secondary
            onClick={() => {
              navigate("/");
            }}
          >
            {"Cancel"}
          </StyledButton>
          <StyledButton
            type="submit"
            disabled={isLoading || haveValidationError}
          >
            Update Post {isLoading ? <ButtonSpinner /> : ""}
          </StyledButton>
        </StyledButtonContainer>
      </StyledCreatePostSection>
    </>
  );
};

export default EditPost;
