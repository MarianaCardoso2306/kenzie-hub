import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = ({ buttonText }) => {
  const { logOutUser } = useContext(UserContext);

  return (
    <StyledHeader>
      <img src={Logo} alt="logo da kenzie hub" />
      <button onClick={logOutUser}>{buttonText}</button>
    </StyledHeader>
  );
};
