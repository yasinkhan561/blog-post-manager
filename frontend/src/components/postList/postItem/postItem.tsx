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
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconSize } from "@/theme/defaultTheme";
import Icon from "@/components/shared/Icon";

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
          src={post.image_url ?? placeholderImageUrl}
          alt={post.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholderImageUrl;
          }}
        />
      </StyledImageContainer>
      <StyledCardBody>
        <StyledTitleContainer>
          <StyledLink to={`/posts/${post.id}`}>
            <StyledPostTitle>{post.title}</StyledPostTitle>
          </StyledLink>
        </StyledTitleContainer>

        <StyledPostBody>{post.content}</StyledPostBody>
      </StyledCardBody>
      <StyledCardFooter>
        <StyledPostAuthor>By {post.author}</StyledPostAuthor>
        <StyledActionButtonsContainer>
          <StyledActionButtonsContainer>
            <StyledLink to={`/posts/${post.id}/edit`}>
              <StyledIconButton>
                <Icon faIcon={faEdit} $size={IconSize.sm} />
              </StyledIconButton>
            </StyledLink>
            <StyledIconButton onClick={() => onDelete(post.id)}>
              <Icon faIcon={faTrash} $size={IconSize.sm} />
            </StyledIconButton>
          </StyledActionButtonsContainer>
        </StyledActionButtonsContainer>
      </StyledCardFooter>
    </StyledCard>
  );
};

export default PostItem;
