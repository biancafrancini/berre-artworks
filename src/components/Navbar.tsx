"use client";
import Link from "next/link";

export const Navbar = ({contacts : contacts} : { contacts: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <div className="navbar fixed top-0 flex md:justify-start justify-center align-center w-full hover:shadow-xl">
      <div className="flex flex-row justify-between md:text-xl text-2xl md:m-4 m-14 gap-4">
        <Link href="/">
          <button className="btn-sergio btn-nav md:p-6 p-2 font-bold rounded-full hover:bg-blue-50">
            Sergio
          </button>
        </Link>
        <Link href="/artworks">
          <button className="btn-opere btn-nav md:p-6 p-2 font-bold rounded-full hover:bg-green-50">
            Opere
          </button>
        </Link>
        <button className="btn-contatti btn-nav md:p-6 p-2 font-bold rounded-full hover:bg-amber-50" onClick={() => {
          contacts.current?.scrollIntoView({ behavior: "smooth" });
        }}>
          Contatti
        </button>
      </div>
    </div>
  );
};
