import React from "react";

import { StyledNavigationBarContainer } from "@/components/shared/navigation/navigationBar/NavigationBarStyles";

interface NavigationBarProps {
  children: React.ReactNode;
  dataCy?: string;
}

const NavigationBar = ({ children, dataCy }: NavigationBarProps) => (
  <StyledNavigationBarContainer data-cy={dataCy}>
    {children}
  </StyledNavigationBarContainer>
);

export default NavigationBar;
