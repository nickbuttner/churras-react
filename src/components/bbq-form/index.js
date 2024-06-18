import React, { useState } from "react";
import { useAlert } from "react-alert";
import Button from "../button";
import * as S from "./styles";

function BBQForm({ onBBQAdded }) {
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataToSend = {};
    formData.forEach((value, key) => (dataToSend[key] = value));

    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/bbqs`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.error) {
        alert.error(data.error);
        setLoading(false);
      } else {
        alert.success("Churras adicionado!");
        onBBQAdded(data.bbq);
      }
    } catch (error) {
      alert.error(error.message);
      setLoading(false);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        Nome
        <input type="text" placeholder="Nome" name="name" required />
      </S.Label>
      <S.Label>
        Data
        <input type="date" placeholder="Data" name="date" required />
      </S.Label>
      <S.Label>
        Valor
        <input
          type="number"
          placeholder="Valor"
          name="suggested_value"
          step="0.1"
          required
        />
      </S.Label>
      <S.Label>
        Valor sem bebida
        <input
          type="number"
          placeholder="Valor sem bebida"
          name="suggested_value_without_beverage"
          step="0.1"
          required
        />
      </S.Label>
      <Button type="submit">
        {loading ? "Adicionando..." : "Adicionar Churras"}
      </Button>
    </S.Form>
  );
}

export default BBQForm;
