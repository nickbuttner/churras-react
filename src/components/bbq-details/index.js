import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { useAlert } from "react-alert";
import { Users, DollarSign } from "react-feather";
import { nanoid } from "nanoid";
import GuestList from "../guest-list";
import CloseButton from "../close-button";
import BBQForm from "../bbq-form";
import * as S from "./styles";

function BBQDetails({
  id: bbqId,
  name,
  date,
  suggested_value,
  suggested_value_without_beverage,
  guests,
  onClose,
  onBBQAdded,
  onBBQDeleted,
  onBBQSaved,
  isEditing,
}) {
  const alert = useAlert();
  const [guestList, setGuestList] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const guestNameInputRef = useRef(null);

  useEffect(() => {
    if (guests?.length) {
      setGuestList(guests);
    }
  }, [guests]);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bbqs/${bbqId}`,
        {
          method: "PATCH",
          headers: new Headers({
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          }),
          body: JSON.stringify({
            guests: guestList.map(({ id, ...guest }) => {
              if (isNaN(id)) {
                return guest;
              }

              return {
                id,
                ...guest,
              };
            }),
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        alert.error(data.error);
      } else {
        alert.success("Churras salvo!");
        setGuestList(data.bbq.guests);
        onBBQSaved(data.bbq);
      }

      setIsSaving(false);
    } catch (error) {
      alert.error(error.message);
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/bbqs/${bbqId}`,
        {
          method: "DELETE",
          headers: new Headers({
            authorization: `Bearer ${localStorage.getItem("token")}`,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        alert.error(data.error);
      } else {
        if (onBBQDeleted) onBBQDeleted(bbqId);
        alert.success("Churras excluido!");
      }

      setIsDeleting(false);
    } catch (error) {
      alert.error(error.message);
      setIsDeleting(false);
    }
  };

  const handlePayment = (e, id) => {
    e.persist();

    if (e.target) {
      setGuestList((state) => {
        const index = state.findIndex((g) => g.id === id);
        const newState = [...state];
        newState[index].paid = e.target.checked;
        return newState;
      });
    }
  };

  const handleAddGuest = (withBeverage) => {
    if (!guestNameInputRef?.current?.value) {
      alert.error("Nome obrigatório");
      return;
    }

    setGuestList((state) => {
      return state.concat({
        id: nanoid(),
        name: guestNameInputRef.current.value,
        paid: false,
        with_beverage: withBeverage,
      });
    });
  };

  const handleRemoveGuest = (id) => {
    setGuestList((state) => {
      return state.filter((guest) => guest.id !== id);
    });
  };

  const getTotal = () => {
    let total = 0;
    guestList.forEach((guest) => {
      total += parseFloat(
        guest.with_beverage ? suggested_value : suggested_value_without_beverage
      );
    });

    return total;
  };

  return (
    <S.Card>
      <S.CloseButtonWrapper>
        <CloseButton onClick={onClose} />
      </S.CloseButtonWrapper>
      {isEditing && (
        <>
          <S.InfoWrapper>
            <div>
              <S.Date>{dayjs(date).format("DD/MM")}</S.Date>
              <S.Name>{name}</S.Name>
            </div>
            <S.Infos>
              <S.Info>
                <Users /> {guestList.length}
              </S.Info>
              <S.Info>
                <DollarSign /> R$ {getTotal()}
              </S.Info>
            </S.Infos>
          </S.InfoWrapper>
          <GuestList
            ref={guestNameInputRef}
            guests={guestList}
            suggestedValue={suggested_value}
            suggestedValueWithoutBeverage={suggested_value_without_beverage}
            onBBQDeleted={onBBQDeleted}
            handleSave={handleSave}
            handleDelete={handleDelete}
            handleAddGuest={handleAddGuest}
            handleRemoveGuest={handleRemoveGuest}
            handlePayment={handlePayment}
            isSaving={isSaving}
            isDeleting={isDeleting}
          />
        </>
      )}
      {!isEditing && <BBQForm onBBQAdded={onBBQAdded} />}
    </S.Card>
  );
}

export default BBQDetails;
