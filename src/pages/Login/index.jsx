import { StyledSection } from "./style";
import Logo from "../../assets/Logo.svg";
import { FormLogin } from "../../components/FormLogin";
import { StyledLink } from "../../styles/link";

export const Login = ({ user, setUser }) => {
  return (
    <StyledSection>
      <img src={Logo} alt="" />
      <div className="form">
        <p className="title">Login</p>
        <FormLogin user={user} setUser={setUser} />
        <span>Ainda não possui uma conta?</span>
        <StyledLink to="/register">Cadastre-se</StyledLink>
      </div>
    </StyledSection>
  );
};
