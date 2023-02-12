import { StyledInput } from "./style";

export const Input = ({ label, id, type, placeholder, error, register }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register(id)} />
      {error ? <p>{error}</p> : null}
    </StyledInput>
  );
};
