import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("Digite seu e-mail"),
    password: yup.string().required("Digite sua senha"),
  })
  .required();

export const FormLogin = ({ setUser }) => {
  const { loginUser, loading } = useContext(UserContext);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(loginUser)}>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register}
        error={errors.email?.message}
      />
      <div className="input-group">
        <Input
          label="Senha"
          id="password"
          type={inputType}
          placeholder="Digite aqui sua senha"
          register={register}
          error={errors.password?.message}
        />
        <AiFillEye className="icon" onClick={togglePasswordVisibility} />
      </div>
      <button type="submit">Entrar</button>
      {loading && <div className="loading">Carregando...</div>}
    </StyledForm>
  );
};
