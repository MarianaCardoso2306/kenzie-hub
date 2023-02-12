import { Link, useNavigate } from "react-router-dom";
import { StyledSection } from "./style";
import { FormRegister } from "../../components/FormRegister";
import { Header } from "../../components/Header";

export const Register = () => {
  return (
    <StyledSection>
      <Header buttonText="Voltar" />
      <div className="form">
        <p className="count">Crie sua conta</p>
        <span>Rapido e grátis, vamos nessa</span>
        <FormRegister />
      </div>
    </StyledSection>
  );
};
