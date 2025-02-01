"use client";
import Link from "next/link";

export const Navbar = () => {
  return(
    <div className="navbar bg-base-100 flex justify-start w-full hover:shadow-xl">
      <div className="flex flex-row justify-between text-xl m-4 gap-4">
        <button className="btn-sergio btn-nav p-6 font-bold rounded-full hover:bg-blue-50">
          Sergio
        </button>
        <Link href="/artworks">
          <button className="btn-opere btn-nav p-6 font-bold rounded-full hover:bg-green-50">
            Opere
          </button>
        </Link>
        <button className="btn-contatti btn-nav p-6 font-bold rounded-full hover:bg-amber-50">
          Contatti
        </button>
      </div>
    </div>
  );
};
