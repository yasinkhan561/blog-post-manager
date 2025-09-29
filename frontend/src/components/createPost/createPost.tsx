import React, { FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { createPostAction } from "@/redux/posts/actionCreators";
import { useNavigate } from "react-router-dom";
import { ButtonSpinner } from "@/components/shared/Loader";
import StyledButton from "@/components/shared/buttons/StyledButton";
import MessageBanner from "@/components/shared/messageBanner/MessageBanner";
import MessageType from "@/constants/MessageType";
import {
  StyledButtonContainer,
  StyledCreatePostSection,
  StyledPageTitle,
} from "./createPostStyles";
import TextField from "@/components/shared/form/textField/TextField";
import TextArea from "@/components//shared/form/textArea/TextArea";
import FileUpload from "@/components/shared/form/fileInput/FileUpload";
import { setIsError } from "@/redux/posts";
import { usePostForm } from "@/hooks/usePostForm";
import NavigationBar from "../shared/navigation/navigationBar/NavigationBar";
import Navigation from "../shared/navigation/Navigation";

const CreatePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoading = useSelector((state: RootState) => state.posts.isLoading);
  const isError = useSelector((state: RootState) => state.posts.isError);

  // 1. Use the custom hook. Since no argument is passed, it initializes for 'create'.
  const {
    formData,
    haveValidationError,
    setClientErrors,
    getFieldError,
    handleChange,
    handleImageSelect,
    handleBlur,
    validateForm,
    resetForm,
  } = usePostForm();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(setIsError(false)); // Clear potential previous API error on submit

    // 2. Use the validation logic from the hook
    if (!validateForm()) {
      return;
    }

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("content", formData.content);
    payload.append("author", formData.author);

    if (formData.image) {
      payload.append("image", formData.image);
    }

    const result: any = await dispatch(createPostAction(payload as any));

    if (result.success) {
      // 3. Reset form state (internal state management in hook)
      resetForm();
      // Reset the physical file input via the DOM
      (e.target as HTMLFormElement).reset();
      navigate("/posts/" + result.data.id);
    } else {
      // Clear client errors on generic API failure
      setClientErrors({});
      // API action creator should handle setting isError(true)
    }
  };

  return (
    <>
      <NavigationBar>
        <Navigation />
      </NavigationBar>
      {isError && (
        <MessageBanner type={MessageType.ERROR} isVisible={isError}>
          Something went wrong. Please try again.
        </MessageBanner>
      )}
      <StyledCreatePostSection
        as="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <StyledPageTitle>Create Post</StyledPageTitle>

        {/* All input fields now rely on the hook's handlers and values */}
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
          label="Upload Post Image"
          onFileSelect={handleImageSelect}
          error={getFieldError("image")}
        />
        <StyledButtonContainer>
          <StyledButton
            type="reset"
            disabled={isLoading}
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
            Create Post {isLoading ? <ButtonSpinner /> : ""}
          </StyledButton>
        </StyledButtonContainer>
      </StyledCreatePostSection>
    </>
  );
};

export default CreatePost;
