"use client";
import Link from "next/link";

export const Navbar = () => {
  return(
    <div className="navbar bg-base-100 flex justify-center w-full hover:shadow-lg">
      <div className="flex flex-row justify-between text-3xl p-6 mt-6 gap-6">
        <button className="btn-sergio btn-nav p-8 font-bold rounded-full hover:bg-blue-50">
          Sergio
        </button>
        <Link href="/artworks">
          <button className="btn-opere btn-nav text-green-700 p-8 font-bold rounded-full hover:bg-green-50">
            Opere
          </button>
        </Link>
        <button className="btn-contatti btn-nav text-amber-700 p-8 font-bold rounded-full hover:bg-amber-50">
          Contatti
        </button>
      </div>
    </div>
  );
};
