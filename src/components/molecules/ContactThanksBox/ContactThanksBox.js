import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 70rem;
  background: whitesmoke;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  top: calc(50% - 106px);
  left: calc(50% - 231px);
  box-shadow: ${({ theme }) => `9px 7px 18px -10px ${theme.colors.AdditionalColorSection}`};

  .closeButton {
    border: none;
    cursor: pointer;
    padding: 0.2rem;
    font-weight: bolder;
    font-size: 2.4rem;
    position: absolute;
    right: 15px;
    top: 10px;
    background: transparent;
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0.8em;
  }
`;

const ContactThanksBox = () => {
  const closeModal = () => {
    const modalbox = document.querySelector("#ModalBox");
    modalbox.remove();
  };

  return (
    <Wrapper id="ModalBox">
      <button className="closeButton" onClick={() => closeModal()}>
        x
      </button>
      <h2>Dziękuję za wiadomość</h2>
      <p>odpowiem najszybciej jak to będzie tylko możliwe</p>
    </Wrapper>
  );
};

export default ContactThanksBox;
