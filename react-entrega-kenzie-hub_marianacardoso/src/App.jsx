import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomToastContainer } from "./styles/toast";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("@TOKEN");
  //   if (token) {
  //     setUser(JSON.parse(token));
  //   }
  // }, []);

  return (
    <>
      <AppRoutes user={user} setUser={setUser} />
      <CustomToastContainer />
    </>
  );
}

export default App;
