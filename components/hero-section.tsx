"use client";
import { Button } from "@/components/ui/button";
import { InstagramIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import { ThemeToggle } from "./theme-toggle";

const menuItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Nós", href: "#sobre" },
];

export default function HeroSection() {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-0">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2 dark:bg-white dark:rounded-full dark:p-2.5 lg:dark:p-0"
                >
                  <Image
                    src="/hero-section/nav-bar/logo.png"
                    width={150}
                    height={150}
                    alt="logo"
                  ></Image>
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block transition-opacity ease-in duration-150"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="relative mt-16">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
              />
              <div className="relative mx-auto max-w-6xl overflow-hidden px-4">
                <Image
                  className="z-2 border-border/25 relative rounded-2xl border shadow-xl shadow-purple-500"
                  src="/hero-section/hero-section-image.png"
                  alt="app screen"
                  width={2796}
                  height={2008}
                />
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                <p className="mx-auto mt-8 max-w-2xl text-wrap text-lg">
                  <TextAnimate animation="slideUp" by="word">
                    No Ninho Infantil, nossa missão é proporcionar experiências
                    culturais enriquecedoras para as crianças. Estamos
                    Comprometidos em criar um espaço seguro e interativo que
                    estimule a criatividade e o aprendizado.
                  </TextAnimate>
                </p>

                <div className="my-8">
                  <Button size="lg" asChild>
                    <Link
                      href="https://www.instagram.com/ninhoinfantil/"
                      target="_blank"
                    >
                      <InstagramIcon className="relative size-4" />
                      <span className="text-nowrap">Nos Acompanhe</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
