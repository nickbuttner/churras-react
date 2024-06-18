import React from "react";
import { X } from "react-feather";
import * as S from "./styles";

function CloseButton({ onClick }) {
  return (
    <S.Close onClick={onClick}>
      <X />
    </S.Close>
  );
}

export default CloseButton;
