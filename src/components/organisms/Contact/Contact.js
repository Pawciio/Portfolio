import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import BackgroundSection from "../../atoms/BackgroundSection/BackgroundSection";
import InputContact from "../../atoms/InputContact/InputContact";
import ButtonContact from "../../atoms/Button/ButtonContact";
import ContactThanksBox from "../../molecules/ContactThanksBox/ContactThanksBox";

import BackgroundWallpaper from "../../../assets/BackgroundContact/BackgroundContact.png";

const BgContactBox = styled.div`
  margin: 0.8em;
  padding: 3.5em;
  max-width: 750px;
  background: ${({ theme }) => theme.colors.ColorInContactBox};
  margin: 0 auto;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0.8em;
  }
`;

const ContactBox = styled.form`
  background: white;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0.8em;
  }
`;

const TitleContact = styled.h2`
  font-size: 32px;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  position: relative;
  margin-bottom: 2em;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.8em;
    left: -10%;
    height: 2px;
    width: 120%;
    background: ${({ theme }) => theme.colors.ColorInContactBox};
  }

  @media ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
  }
  @media ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 18px;
  }
`;

class Contact extends React.Component {
  state = {
    sendButton: false,
    validateForm: false,
  };

  changeStateValidateForm = () => {
    const contactBox = document.getElementById("contactBox");
    if (contactBox[0].value && contactBox[1].value && contactBox[2].value) {
      this.setState({
        validateForm: true,
      });
    }
  };

  sendButtonChange = () => {
    this.changeStateValidateForm();
    this.setState({
      sendButton: true,
    });
    setTimeout(() => {
      this.setState({
        sendButton: false,
        validateForm: false,
      });
    }, 10000);
  };

  closeButtonBox = () => {
    this.setState({
      sendButton: false,
    });
  };

  render() {
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(process.env, process.env, e.target, process.env).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
      e.target.reset();
    };
    return (
      <BackgroundSection id="Contact" Padding="3em 0" Background={BackgroundWallpaper}>
        {this.state.sendButton && this.state.validateForm ? <ContactThanksBox /> : null}
        <BgContactBox>
          <ContactBox id="contactBox" onSubmit={sendEmail}>
            <TitleContact>Skontaktuj się</TitleContact>
            <InputContact type="text" placeholder="Imię i nazwisko" Name="name" />
            <InputContact type="email" placeholder="Email" Name="user_email" />
            <InputContact InTexarea placeholder="Wiadomość" Name="message" />
            <ButtonContact type="submit" onClick={this.sendButtonChange}>
              Wyślij
            </ButtonContact>
          </ContactBox>
        </BgContactBox>
      </BackgroundSection>
    );
  }
}

export default Contact;
