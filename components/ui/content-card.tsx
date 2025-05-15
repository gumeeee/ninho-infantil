"use client";
import { cn } from "@/lib/utils";

export function ContentCard() {
  return (
    <div className="max-w-xl w-full group/card shadow-2xl dark:shadow-amber-500">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-xs sm:max-w-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url('/livro-ninho-infantil.jpg')] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-80"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content bg-black opacity-80 rounded-3xl text-center">
          <h1 className="font-bold text-xl md:text-2xl text-gray-100 relative z-10">
            Ninho Infantil
          </h1>
          <p className="font-normal text-sm text-gray-100 relative z-10 my-4">
            Lançamento do livro infantil MARIA CONSTRÓI O MUNDO da autora Paula
            Naves
          </p>
        </div>
      </div>
    </div>
  );
}
