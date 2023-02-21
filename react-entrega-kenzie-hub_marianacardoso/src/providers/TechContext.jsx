import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [techs, setTechs] = useState([]);
  const [editingTech, setEditingTech] = useState(null);
  const [modalCreateMode, setModalCreateMode] = useState(null);

  useEffect(() => {
    const techs = user.techs;
    setTechs(techs);
  }, []);

  const techCreate = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...techs, response.data]);
      toast.success("Categoria adicionada com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  const techRemove = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.filter((tech) => tech.id !== techId);
      setTechs(newTechs);

      toast.success("Categoria excluída com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  const techUpdate = async (data, techId) => {
    delete data.title;

    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.put(`users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...response.data };
        } else {
          return tech;
        }
      });
      console.log(newTechs);
      setTechs(newTechs);
      toast.success("Categoria editada com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        techCreate,
        techRemove,
        techUpdate,
        editingTech,
        setEditingTech,
        modalCreateMode,
        setModalCreateMode,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
