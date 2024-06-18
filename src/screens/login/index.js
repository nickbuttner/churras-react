import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import Header from "../../components/header";
import Footer from "../../components/footer";
import * as S from "./styles";

function Login() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataToSend = {};
    formData.forEach((value, key) => (dataToSend[key] = value));

    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.name);
        history.push("/");
      } else if (data.error) {
        alert.error(data.error);
        setLoading(false);
      }
    } catch (error) {
      alert.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header fade title="Agenda de Churras" />
      <S.Content>
        <S.Form onSubmit={handleSubmit}>
          <S.Label>
            <div>Login</div>
            <input placeholder="e-mail" type="email" name="email" required />
          </S.Label>
          <S.Label>
            <div>Senha</div>
            <input
              placeholder="senha"
              type="password"
              name="password"
              required
            />
          </S.Label>
          <S.Button type="submit">
            {loading ? "Entrando..." : "Entrar"}
          </S.Button>
        </S.Form>
      </S.Content>
      <Footer />
    </>
  );
}

export default Login;
