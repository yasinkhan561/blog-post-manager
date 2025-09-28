import React from "react";
import { Post } from "@/types/post";
import {
  StyledCard,
  StyledPostAuthor,
  StyledCardBody,
  StyledPostTitle,
  StyledActionButtonsContainer,
  StyledPostBody,
  StyledTitleContainer,
  StyledCardFooter,
  StyledImageContainer,
  StyledImage,
} from "./postItemStyles";
import { StyledIconButton } from "@/components/shared/buttons/StyledIconButton";
import { Trash2, Edit } from "lucide-react";
import { StyledLink } from "@/components/shared/StyledLink";
import noImagePlaceholder from "@/assets/images/no-image-placeholder.svg";

interface PostProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostItem = ({ post, onDelete }: PostProps) => {
  const placeholderImageUrl = noImagePlaceholder;
  return (
    <StyledCard>
      <StyledImageContainer>
        <StyledImage
          src={post.image_url ? post.image_url : placeholderImageUrl}
          alt={post.title}
        />
      </StyledImageContainer>
      <StyledCardBody>
        <StyledTitleContainer>
          <StyledLink to={`/post/${post.id}`}>
            <StyledPostTitle>{post.title}</StyledPostTitle>
          </StyledLink>
        </StyledTitleContainer>

        <StyledPostBody>{post.content}</StyledPostBody>
      </StyledCardBody>
      <StyledCardFooter>
        <StyledPostAuthor>By {post.author}</StyledPostAuthor>
        <StyledActionButtonsContainer>
          <StyledActionButtonsContainer>
            <StyledLink to={`/post/${post.id}/edit`}>
              <StyledIconButton>
                <Edit size={18} />
              </StyledIconButton>
            </StyledLink>
            <StyledIconButton onClick={() => onDelete(post.id)}>
              <Trash2 size={18} />
            </StyledIconButton>
          </StyledActionButtonsContainer>
        </StyledActionButtonsContainer>
      </StyledCardFooter>
    </StyledCard>
  );
};

export default PostItem;
