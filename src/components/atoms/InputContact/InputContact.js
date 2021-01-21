import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 1em;
  padding: 0.8em;
  width: 500px;
  border: none;
  font-size: 18px;
  background: ${({ theme }) => theme.colors.InputAreaContactBox};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.AdditionalColorSection};
  }
`;

const Textarea = styled.textarea`
  margin: 1em;
  padding: 0.8em;
  resize: none;
  width: 500px;
  height: 150px;
  border: none;
  font-size: 18px;
  background: ${({ theme }) => theme.colors.InputAreaContactBox};
  position: relative;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.AdditionalColorSection};
  }
`;

const InputContact = ({ placeholder, InTexarea }) => (
  <>
    {InTexarea ? (
      <>
        <Textarea placeholder={placeholder} />
      </>
    ) : (
      <>
        <Input placeholder={placeholder} />
      </>
    )}
  </>
);

export default InputContact;
