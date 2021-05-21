import { useState } from "react";
import styled from "styled-components";

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 999;
    cursor: pointer;

    div {
      width: 2rem;
      height: 0.25rem;
      transform-origin: 1px;
      border-radius: 10px;
      transition: all 0.3s linear;
      background: white;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

function Hamburger({ open, setOpen }) {
  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </>
  );
}

export default Hamburger;
