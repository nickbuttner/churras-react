import React from "react";
import dayjs from "dayjs";
import { Users, DollarSign } from "react-feather";
import * as S from "./styles";

function BBQCard({
  id,
  name,
  date,
  suggested_value,
  suggested_value_without_beverage,
  guests = [],
}) {
  const getTotal = () => {
    let total = 0;
    guests.forEach((guest) => {
      total += guest.with_beverage
        ? suggested_value
        : suggested_value_without_beverage;
    });

    return total;
  };

  return (
    <S.Card>
      <div>
        <S.Date>{dayjs(date).format("DD/MM")}</S.Date>
        <S.Name>{name}</S.Name>
      </div>
      <S.Infos>
        <S.Info>
          <Users /> {guests.length}
        </S.Info>
        <S.Info>
          <DollarSign /> R$ {getTotal()}
        </S.Info>
      </S.Infos>
    </S.Card>
  );
}

export default BBQCard;
