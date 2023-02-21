import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userId = response.data.id;
          setUser(response.data);
          navigate(`/dashboard/${userId}`);
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          console.error(error);
        }
      };
      userAutoLogin();
    }
    navigate("/");
  }, []);

  const registerUser = async (data) => {
    try {
      await api.post("users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! algo deu errado");
    }
  };

  const loginUser = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("sessions", data);
      const token = response.data.token;
      const userId = response.data.user.id;
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", userId);
      setUser(response.data.user);
      setLoading(false);
      toast.success("Login realizado com sucesso");
      navigate(`/dashboard/${userId}`);
    } catch (error) {
      toast.error("E-mail/senha incorretos");
      setLoading(false);
    }
  };

  const logOutUser = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logOutUser,
        loading,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
