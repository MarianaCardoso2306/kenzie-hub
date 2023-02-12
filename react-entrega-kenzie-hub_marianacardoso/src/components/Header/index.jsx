import { StyledHeader } from "./style";
import Logo from "../../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ buttonText }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <img src={Logo} alt="logo da kenzie hub" />
      <button onClick={logOut}>{buttonText}</button>
    </StyledHeader>
  );
};
