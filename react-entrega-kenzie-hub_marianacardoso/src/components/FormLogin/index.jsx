import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

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
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await api.post("sessions", data);
      const token = response.data.token;
      const userId = response.data.user.id;
      localStorage.setItem("@TOKEN", JSON.stringify(token));
      localStorage.setItem("@USERID", JSON.stringify(userId));
      setUser(localStorage.setItem("@TOKEN", JSON.stringify(token)));
      toast.success("Login realizado com sucesso");
      navigate(`/dashboard/${userId}`);
    } catch (error) {
      toast.error("E-mail/senha incorretos");
    }
  };

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
    </StyledForm>
  );
};
