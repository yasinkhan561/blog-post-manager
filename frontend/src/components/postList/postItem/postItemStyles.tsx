import styled from "styled-components";
import {
  ColorKey,
  Spacing,
  TextSize,
  BorderRadius,
  BoxShadow,
  Breakpoint,
  TextWeight,
} from "@/theme/defaultTheme";

export const StyledCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors[ColorKey.white]};
  border-radius: ${BorderRadius.default};
  box-shadow: ${BoxShadow.card};
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  margin-bottom: 5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCardBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: inherit;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 10rem;
`;

export const StyledPostTitle = styled.div`
  position: relative;
  margin: 0 0 24px;
  padding: ${Spacing.sm} ${Spacing.sm} ${Spacing.xs} ${Spacing.sm};
  text-align: center;
  font-size: ${TextSize.lg};
  font-weight: ${TextWeight.bold};
  color: ${({ theme }) => theme.colors[ColorKey.primaryTextColor]};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;

  &::after {
    position: absolute;
    display: block;
    width: 50px;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #c89b3f;
    content: "";
  }
`;

export const StyledPostBody = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
  font-size: ${TextSize.md};
  line-height: 1.4;
  color: ${({ theme }) => theme.colors[ColorKey.secondaryTextColor]};
  margin-top: ${Spacing.none};
  margin-bottom: ${Spacing.sm};
  padding-left: ${Spacing.sm};
  padding-right: ${Spacing.sm};
`;

export const StyledCardFooter = styled.div`
  position: absolute;
  bottom: -45px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors[ColorKey.white]};
  box-shadow: ${BoxShadow.card};
  border-bottom-left-radius: ${BorderRadius.default};
  border-bottom-right-radius: ${BorderRadius.default};
  display: flex;
  justify-content: space-between;
  align-items: center
  border-top: 2px solid ${({ theme }) => theme.colors[ColorKey.lightBorder]};
  padding: ${Spacing.sm};
  z-index: 99;
`;

export const StyledPostAuthor = styled.span`
  font-size: ${TextSize.md};
  font-weight: ${TextWeight.semiBold};
  color: ${({ theme }) => theme.colors[ColorKey.secondaryTextColor]};
`;

export const StyledActionButtonsContainer = styled.div`
  display: flex;
  gap: ${Spacing.xxs};

  @media (${Breakpoint.forPhoneOnly}) {
    margin-top: ${Spacing.xs};
  }
`;
