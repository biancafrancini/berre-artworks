"use client";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { ImMail2 } from "react-icons/im";

export const Footer = () => {
  return (
    <div className="footer bg-blue-100 flex justify-center w-full hover:shadow-xl">
      <div className="flex flex-col items-center justify-center w-full py-20 gap-8">
        <h4 className="text-xl text-white text-center">
          Dove trovarmi:{" "}
        </h4>
        <div className="flex flex-row justify-between items-center gap-6">
          <Link href="mailto:sergio@example.com" className="mail-icon text-5xl hover:scale-110">
            <ImMail2 />
          </Link>
          <Link
            href="https://www.facebook.com/sergio.berrettini.1"
            target="_blank"
            className="fb-icon text-5xl border-2 rounded-lg hover:scale-110"
          >
            <FaFacebookSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};
