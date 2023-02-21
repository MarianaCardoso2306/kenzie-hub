import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledModal } from "./style";

export const ModalDetailsTech = () => {
  const {
    techRemove,
    techUpdate,
    editingTech,
    setEditingTech,
    modalCreateMode,
    setModalCreateMode,
  } = useContext(TechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  const submit = (data, event) => {
    techUpdate(data, event.target.id);
    setEditingTech(null);
  };

  const removeTech = (event) => {
    techRemove(event.target.id);
    setEditingTech(null);
  };

  return (
    <StyledModal>
      <div>
        <div className="header">
          <h3>Tecnologia Detalhes</h3>
          <span onClick={() => setEditingTech(null)}>x</span>
        </div>
        <form onSubmit={handleSubmit(submit)} id={editingTech.id}>
          <label name="title" htmlFor="title">
            Nome do projeto
          </label>
          <input
            type="text"
            id="title"
            readOnly={true}
            {...register("title")}
          />
          <label htmlFor="status">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="buttons">
            <button className="save-btn" type="submit">
              Salvar alterações
            </button>
            <button
              type="button"
              className="remove-btn"
              id={editingTech.id}
              onClick={() => removeTech(event)}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};
