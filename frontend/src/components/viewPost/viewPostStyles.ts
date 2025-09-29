import styled from "styled-components";

// Color Palette & Typography (based on the grid image)
const Colors = {
  primaryText: "#333",
  secondaryText: "#666",
  background: "#f8f8f8",
  cardBackground: "#fff",
  border: "#ddd",
  accent: "#007bff", // A subtle blue for links/accents
};

// Global Container for the entire ViewPost page
export const PostContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background-color: ${Colors.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  // Responsive padding for smaller screens
  @media (max-width: 768px) {
    margin: 20px 10px;
    padding: 20px;
  }
`;

// Image container for the hero image
export const ImageContainer = styled.div`
  width: 100%;
  max-height: 450px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`;

// Image element
export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Title and metadata section
export const HeaderSection = styled.header`
  margin-bottom: 30px;
  text-align: center;
`;

// Main post title
export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${Colors.primaryText};
  line-height: 1.2;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Author and Date metadata
export const PostMeta = styled.p`
  font-size: 0.95rem;
  color: ${Colors.secondaryText};
  font-style: italic;
`;

// Main content area
export const PostContent = styled.section`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${Colors.primaryText};
  border-top: 1px solid ${Colors.border};
  padding-top: 30px;

  p {
    margin-bottom: 20px;
  }
`;

// Placeholder style for when the image is missing or loading
export const PlaceholderImage = styled.div`
  width: 100%;
  height: 450px;
  background-color: ${Colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.secondaryText};
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 8px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

// Loading/Error state styles (optional, but good practice)
export const StateMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: ${Colors.secondaryText};
`;
