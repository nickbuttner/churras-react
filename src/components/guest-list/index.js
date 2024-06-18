import React from "react";
import CloseButton from "../close-button";
import Button from "../button";
import * as S from "./styles";

const GuestList = React.forwardRef(
  (
    {
      bbqId,
      suggestedValue,
      suggestedValueWithoutBeverage,
      guests,
      onBBQDeleted,
      handleSave,
      handleDelete,
      handleAddGuest,
      handleRemoveGuest,
      handlePayment,
      isSaving,
      isDeleting,
    },
    guestNameInputRef
  ) => {
    return (
      <div>
        <S.GuestList>
          {guests.map((guest) => {
            const id = guest.id;
            return (
              <S.Guest key={id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => handlePayment(e, id)}
                    checked={guest.paid}
                  />{" "}
                  {guest.name}
                </label>
                <S.GuestActions>
                  <S.Value paid={guest.paid}>
                    R${" "}
                    {guest.with_beverage
                      ? suggestedValue
                      : suggestedValueWithoutBeverage}
                  </S.Value>
                  <CloseButton onClick={() => handleRemoveGuest(id)} />
                </S.GuestActions>
              </S.Guest>
            );
          })}
          <S.Guest>
            <S.Form>
              <S.Input
                ref={guestNameInputRef}
                type="text"
                placeholder="Nome"
                name="name"
              />
              <S.Actions>
                <Button type="button" onClick={() => handleAddGuest(true)}>
                  Add com bebida (R$ {suggestedValue})
                </Button>
                <Button type="button" onClick={() => handleAddGuest(false)}>
                  Add sem bebida (R$ {suggestedValueWithoutBeverage})
                </Button>
              </S.Actions>
            </S.Form>
          </S.Guest>
        </S.GuestList>
        <S.Actions>
          <Button outline onClick={handleDelete}>
            {isDeleting ? "Excluindo..." : "Excluir Churras"}
          </Button>
          <Button onClick={handleSave}>
            {isSaving ? "Salvando..." : "Salvar Churras"}
          </Button>
        </S.Actions>
      </div>
    );
  }
);

export default GuestList;
