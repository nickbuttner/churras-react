import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

function Header({ title, fade, username }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <S.Header fade={fade}>
      {username && (
        <S.Username>
          {username} |
          <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
        </S.Username>
      )}
      <S.Title>{title}</S.Title>
    </S.Header>
  );
}

export default Header;
