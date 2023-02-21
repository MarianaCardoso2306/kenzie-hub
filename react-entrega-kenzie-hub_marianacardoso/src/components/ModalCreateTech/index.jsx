import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledModal } from "./style";

export const ModalCreateTech = () => {
  const { register, handleSubmit } = useForm();
  const { techCreate, setModalCreateMode } = useContext(TechContext);

  const submit = (data) => {
    techCreate(data);
    setModalCreateMode(null);
  };

  return (
    <div>
      <StyledModal>
        <div className="header">
          <h3>Cadastrar Tecnologia</h3>
          <span onClick={() => setModalCreateMode(null)}>x</span>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label name="title" htmlFor="title">
            Nome
          </label>
          <input type="text" id="title" {...register("title")} />
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tenologia</button>
        </form>
      </StyledModal>
    </div>
  );
};
