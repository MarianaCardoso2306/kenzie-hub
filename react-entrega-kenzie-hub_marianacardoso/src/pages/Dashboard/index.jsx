import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { StyledSection } from "./style";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { ModalDetailsTech } from "../../components/ModalDetailsTech";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const {
    techs,
    editingTech,
    setEditingTech,
    modalCreateMode,
    setModalCreateMode,
  } = useContext(TechContext);

  return (
    <StyledSection>
      <Header buttonText="Sair" />
      <div className="infos">
        {user && <p>Olá, {user.name}</p>}
        {user && <span>{user.course_module}</span>}
      </div>
      <div className="techs">
        <div className="techs-title">
          <h2>Tecnologias</h2>
          <button onClick={() => setModalCreateMode("open")}>+</button>
        </div>
        {techs.length > 0 ? (
          <ul>
            {techs.map((tech) => (
              <li
                key={tech.id}
                id={tech.id}
                onClick={() => setEditingTech(tech)}
              >
                <p>{tech.title}</p>
                <span>{tech.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma categoria foi cadastrada ainda</p>
        )}
      </div>
      {modalCreateMode ? <ModalCreateTech /> : null}
      {editingTech ? <ModalDetailsTech /> : null}
    </StyledSection>
  );
};
