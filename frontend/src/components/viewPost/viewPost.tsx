import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Author, Container, Content, EditLink, Title } from "./viewPostStyles";


const ViewPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = useSelector((state: RootState) =>
    state.posts.items.find((p) => p.id === Number(id))
  );

  if (!post) return <div>Post not found.</div>;

  return (
    <Container>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <Author><b>Author:</b> {post.author}</Author>
      <EditLink to={`/post/${post.id}/edit`}>Edit</EditLink>
    </Container>
  );
};

export default ViewPost;
