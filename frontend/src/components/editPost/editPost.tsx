// import React, { ChangeEvent, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "@/redux/store";
// import { updatePostAction } from "@/redux/posts/actionCreators";
// import { createPostAction } from "@/redux/posts/actionCreators";
// import Loader from "@/components/shared/Loader";
// import StyledButton from "@/components/shared/buttons/StyledButton";
// import MessageBanner from "@/components/shared/messageBanner/MessageBanner";
// import MessageType from "@/constants/MessageType";
// import { StyledCreatePostSection } from "./../createPost/createPostStyles";
// import TextField from "@/components/shared/form/textField/TextField";
// import TextArea from "@/components//shared/form/textArea/TextArea";
// import FileUpload from "@/components/shared/form/fileInput/FileUpload";

// const EditPost = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const dispatch = useDispatch<AppDispatch>();

//   const post = useSelector((state: RootState) =>
//     state.posts.postList.find((p) => p.id === Number(id))
//   );

//   const isLoading = useSelector((state: RootState) => state.posts.isLoading);
//   const isError = useSelector((state: RootState) => state.posts.isError);

//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     author: "",
//   });

//   useEffect(() => {
//     if (post) {
//       setFormData({
//         title: post.title,
//         content: post.content,
//         author: post.author,
//       });
//     }
//   }, [post]);

//   if (!post) return <div>Post not found.</div>;

//   const handleChange = (field: keyof typeof formData, value: string) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = async (data: typeof formData) => {
//     await dispatch(updatePostAction(post.id, data));
//     if (!isError) navigate(`/post/${post.id}`);
//   };

//   return (
//     <StyledCreatePostSection as="form" onSubmit={handleSubmit}>
//       Welcome to the Create Post Page
//       {isError && (
//         <MessageBanner type={MessageType.ERROR}>
//           A network error occurred. Please try again.
//         </MessageBanner>
//       )}
//       <TextField
//         label="Title"
//         name="title"
//         value={formData.title}
//         onChange={(e: ChangeEvent<HTMLInputElement>) =>
//           handleChange("title", e.target.value)
//         }
//         placeholder="Enter post title"
//         required
//         error={getFieldError("title")}
//       />
//       <TextArea
//         placeholder="Content"
//         label="Content"
//         value={formData.content}
//         onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
//           handleChange("content", e.target.value)
//         }
//         required
//         error={getFieldError("content")}
//       />
//       <TextField
//         label="Author"
//         name="author"
//         value={formData.author}
//         onChange={(e: ChangeEvent<HTMLInputElement>) =>
//           handleChange("author", e.target.value)
//         }
//         placeholder="Enter author name"
//         required
//         error={getFieldError("author")}
//       />
//       <FileUpload
//         label="Upload Post Image"
//         onFileSelect={(file) => handleChange("image", file)}
//         error={getFieldError("image")}
//       />
//       <StyledButton type="submit" disabled={isLoading}>
//         {isLoading ? <Loader /> : "Create Post"}
//       </StyledButton>
//     </StyledCreatePostSection>
//   );
// };

// export default EditPost;
