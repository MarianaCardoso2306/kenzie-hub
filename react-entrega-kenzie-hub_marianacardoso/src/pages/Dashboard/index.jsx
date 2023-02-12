import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { StyledSection } from "./style";

export const Dashboard = (user) => {
  const params = useParams();

  const [userData, setUserData] = useState(null);
  const id = params.userId;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get(`users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [id]);

  return (
    <StyledSection>
      <Header buttonText="Sair" />
      <div className="infos">
        {userData && <p>Olá, {userData.name}</p>}
        {userData && <span>{userData.course_module}</span>}
      </div>
      <div className="notification">
        <p>Que pena! Estamos em desenvolvimento :(</p>
        <span>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </span>
      </div>
    </StyledSection>
  );
};
