import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 7em;
  right: 20px;
  z-index: 2;

  .active {
    transform: rotate(0);
    box-shadow: none;

    &::before {
      content: "";
      width: 140px;
      height: 45px;
      background: white;
      position: absolute;
      top: -3px;
      right: -3px;
      border: 3px solid ${({ theme }) => theme.colors.ColorInContactBox};
      transform: rotate(0);
      box-shadow: 5px 5px 5px black;
      transition: all 0.5s;
    }

    @media ${({ theme }) => theme.mediaQueries.xs} {
      &::before {
        height: 30px;
        width: 120px;
      }
    }
  }

  .activeA {
    display: block;
    position: relative;
    right: 73px;
    top: 10px;
    transition: all 0.5s ease-in-out;

    @media ${({ theme }) => theme.mediaQueries.xs} {
      top: 3px;
    }
  }
`;

const BoxItem = styled.div`
  width: 45px;
  height: 45px;
  margin: 2em 1em;
  border: 3px solid ${({ theme }) => theme.colors.ColorInContactBox};
  transform: rotate(45deg);
  box-shadow: 5px 5px 5px black;
  transition: all 0.5s;

  &::before {
    transition: all 0.5s;
  }

  @media ${({ theme }) => theme.mediaQueries.xs} {
    width: 30px;
    height: 30px;
  }
`;

const NavA = styled.a`
  text-decoration: none;
  display: none;
  color: black;
  font-weight: bold;
  min-width: 80px;

  &:hover {
    right: 78px;
    transition: all 0.5s ease-in-out;
  }
  @media ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 13px;
  }
`;

const Navigation = () => {
  const MouseEnterEvent = (e) => {
    const targetElNav = e.target;
    if (targetElNav.id === "navBox") {
      targetElNav.closest("#navBox").classList.add("active");
      targetElNav.closest("div").lastChild.classList.add("activeA");
    }
  };

  const MouseLeaveEvent = (e) => {
    const targetElNav = e.target;
    if (targetElNav.id === "navBox") {
      targetElNav.closest("#navBox").classList.remove("active");
      targetElNav.closest("div").lastChild.classList.remove("activeA");
    }
  };

  return (
    <Wrapper id="Navigation">
      <BoxItem id="navBox" onMouseEnter={(e) => MouseEnterEvent(e)} onMouseLeave={(e) => MouseLeaveEvent(e)}>
        <NavA id="navA" href="#Header">
          Home
        </NavA>
      </BoxItem>
      <BoxItem id="navBox" onMouseEnter={(e) => MouseEnterEvent(e)} onMouseLeave={(e) => MouseLeaveEvent(e)}>
        <NavA id="navA" href="#AboutMe">
          O mnie
        </NavA>
      </BoxItem>
      <BoxItem id="navBox" onMouseEnter={(e) => MouseEnterEvent(e)} onMouseLeave={(e) => MouseLeaveEvent(e)}>
        <NavA id="navA" href="#Technologies">
          Technologie
        </NavA>
      </BoxItem>
      <BoxItem id="navBox" onMouseEnter={(e) => MouseEnterEvent(e)} onMouseLeave={(e) => MouseLeaveEvent(e)}>
        <NavA id="navA" href="#Projects">
          Projekty
        </NavA>
      </BoxItem>
      <BoxItem id="navBox" onMouseEnter={(e) => MouseEnterEvent(e)} onMouseLeave={(e) => MouseLeaveEvent(e)}>
        <NavA id="navA" href="#Contact">
          Kontakt
        </NavA>
      </BoxItem>
    </Wrapper>
  );
};
export default Navigation;
