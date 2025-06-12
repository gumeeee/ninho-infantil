"use client";

import { BookOpen, HandHeart, Users } from "lucide-react";
import { ActivityModal } from "./ativity-modal";

function About() {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="sobre"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Nossa Missão
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              No Ninho Infantil, acreditamos que toda criança merece um ambiente
              seguro e acolhedor para aprender, brincar e crescer. Apoiamos a
              educação das crianças e, ao mesmo tempo, capacitamos as mães com
              recursos e a comunidade.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <BookOpen className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Educação</h3>
            <p className="mt-2 text-gray-400">
              Fornecer educação de qualidade e recursos de aprendizagem para
              ajudar as crianças a desenvolver habilidades essenciais.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Comunidade</h3>
            <p className="mt-2 text-gray-400">
              Construindo uma comunidade de apoio para mães e crianças se
              conectarem e crescerem juntas.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Atividades Praticadas
            </h2>
            <ActivityModal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
