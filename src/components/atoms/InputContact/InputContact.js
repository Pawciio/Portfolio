import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin: 1em;
  padding: 0.8em;
  max-width: 500px;
`;

const Textarea = styled.textarea`
  margin: 1em;
  padding: 0.8em;
  resize: none;
  max-width: 500px;
  height: 150px;
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
