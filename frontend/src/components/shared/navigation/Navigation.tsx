import { useNavigate } from "react-router-dom";
import {
  faChevronLeft,
  faCog,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "@/components/shared/navigation/navigationBar/NavigationBar";
import NavigationTab from "@/components/shared/navigation/navigationTab/NavigationTab";
import {
  StyledLeftMenu,
  StyledRightMenu,
} from "@/components/shared/navigation/NavigationStyles";

interface NavigationProps {
  children?: React.ReactNode;
  dataCy?: string;
  isStartPage?: boolean;
}
const Navigation = ({ children, dataCy, isStartPage }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <NavigationBar dataCy={dataCy}>
      <StyledLeftMenu>
        {!isStartPage && (
          <NavigationTab
            icon={faChevronLeft}
            text={"Back"}
            dataCy="go-back-tab"
            action={() => navigate(-1)}
          />
        )}

        {children}
      </StyledLeftMenu>
    </NavigationBar>
  );
};

export default Navigation;
