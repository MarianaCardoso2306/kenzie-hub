import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("E-mail é obrigatório"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/\W|_/, "Deve conter ao menos um caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      )
      .required("Confirmação de senha é obrigatória"),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.string().required("Contato é obrigatório"),
  })
  .required();

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
      <Input
        label="Nome"
        id="name"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        id="password"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register}
        error={errors.password?.message}
      />
      <Input
        label="Confirmar senha"
        id="passwordConfirmation"
        type="password"
        placeholder="Digite mais uma vez sua senha"
        register={register}
        error={errors.passwordConfirmation?.message}
      />
      <Input
        label="Bio"
        id="bio"
        type="text"
        placeholder="Fale sobre você"
        register={register}
        error={errors.bio?.message}
      />
      <Input
        label="Contato"
        id="contact"
        type="contact"
        placeholder="Opção de contato"
        register={register}
        error={errors.contact?.message}
      />
      <label htmlFor="module">Selecionar Módulo</label>
      <select id="course_module" {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
};
