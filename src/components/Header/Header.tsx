"use client";

import clsx from "clsx";
import css from "./Header.module.css";

import Logo from "@/components/Logo/logo.svg";

import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    console.log(Logo.src);
    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [toggleMenu]);

  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link className={css.logo} href="/">
          <svg>
            <use href={Logo.src}></use>
          </svg>
          VG.dev
        </Link>
        <ul className={css.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        <Link className={clsx(css.navListLink, "primary-btn")} href="/contact">
          Contact
        </Link>
      </nav>
      <button className={css.burger} onClick={() => setToggleMenu(!toggleMenu)}>
        <CiMenuBurger />
      </button>
      <div className={clsx(css.mobileMenu, toggleMenu && css.mobileMenuActive)}>
        <div className={css.mobileMenuHeader}>
          <Link className={css.logo} href="/">
            <svg>
              <use href={Logo.src}></use>
            </svg>
            VG.dev
          </Link>
          <button
            className={css.closeBtn}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <AiOutlineClose />
          </button>
        </div>
        <nav className={css.mobileNav}>
          <ul className={css.mobileNavList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Link className="primary-btn" href="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
}
