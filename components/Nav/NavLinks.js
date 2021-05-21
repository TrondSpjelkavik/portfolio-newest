import Hamburger from "./Hamburger/Hamburger";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";

const NavList = styled.ul`
  display: flex;
  width: 300px;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  color: white;
  background: #343641;

  @media (max-width: 500px) {
    height: 100vh;
    width: 100%;
    padding: 10rem 0;
    flex-direction: column;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
  }
`;

const NavLists = styled.li`
  cursor: pointer;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #eb5e43;
    text-decoration-thickness: 2px;
  }
`;

function NavLinks() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <NavList open={open}>
        <Link href="/">
          <NavLists
            className={router.pathname == "/" ? "active" : ""}
            onClick={() => setOpen(!open)}
          >
            Home
          </NavLists>
        </Link>

        <Link href="/projects">
          <NavLists
            className={router.pathname == "/projects" ? "active" : ""}
            onClick={() => setOpen(!open)}
          >
            Projects
          </NavLists>
        </Link>

        <Link href="/about-me">
          <NavLists
            className={router.pathname == "/about-me" ? "active" : ""}
            onClick={() => setOpen(!open)}
          >
            About me
          </NavLists>
        </Link>
      </NavList>
    </>
  );
}

export default NavLinks;
