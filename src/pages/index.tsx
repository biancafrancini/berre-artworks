"use client";
import Image from "next/image";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Navbar } from "@/components/Navbar";

const images: string[] = [
  "red_horse_swing-1.jpeg",
  "cross_murales.jpeg",
  "viandante.jpeg",
  "female_toilet.jpeg",
  "exlibris.jpeg",
  "portami_su.jpeg",
  "kids_copy.jpeg",

  "whole_wall_better.jpeg",
  "pinocchio_piece.jpeg",
  "mustache_man.jpeg",
  "woods_and_stones_moon.jpeg",
  "woods_and_stones_moon.jpeg",
  "horse_man.jpeg",
  "volleyball.jpeg",
  "female_toilet.jpeg",
];

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className="column flex flex-col h-full relative" style={{ y }}>
      {images.map((img, index) => {
        return (
          <div
            className="img-container w-full relative p-2 overflow-hidden"
            key={index}
          >
            <Image
              className="img object-cover p-1 rounded-xl"
              src={`/images/${img}`}
              fill
              sizes="100%"
              priority={true}
              alt="image"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { height } = dimension;

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.1]);
  // const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 3.1]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="main-container">
      <Navbar />
      <div className="space flex flex-col justify-center items-center">
        <h1 className="title text-8xl font-bold py-4">Sergio Berrettini</h1>
        <h2 className="title text-3xl italic pt-24 leading-relaxed">
          "Portami su <br />
          distante da questa vieta e bassa solleticazione <br /> così da
          assaporare il tutto <br /> come ampia vista da un balcone"
        </h2>
        {/* <h3 className="text-5xl font-bold text-center pt-24">Scroll down 👇🏻 </h3> */}
      </div>
      <div ref={container} className="gallery-container">
        <div className="gallery flex">
          <Column
            images={[images[0], images[1], images[2], images[3]]}
            y={y1}
          />
          <Column images={[images[4], images[5], images[6]]} y={y2} />
          <Column
            images={[images[7], images[8], images[9], images[10]]}
            y={y3}
          />
          <Column
            images={[images[11], images[12], images[13], images[14]]}
            y={y4}
          />
        </div>
      </div>
      <div className="subcategory-container">
        <h3 className="title text-6xl font-bold pt-52 pb-12">Mi presento</h3>
        <p className="text-2xl w-1/2 leading-relaxed text-center">
          Questa è la mia tana <br />
          E non ci porto soltanto quello che m'è stato vanto <br />
          Corse balzi salti voli grame notti e rari soli <br />
          terra che scricchiola piede che scivola <br />
          confusi all'acre odore di saliva e di sudore <br />
          Cuori vivi gioiosi grigio-neri gravosi pennelli chitarre fate
          <br />
          gnomi farfalle stregate <br />
          Amore che lacrima o gode irridente <br />
          dolore che rumina e opprime invadente <br />
          Penne anelli orologi attestati necrologi <br />
          vivacissimi occhi verdi in cui viaggi oppur ti perdi <br />
          chiodi viti legno zolle vanghe semi vuoto folle <br />
          poi batuffoli di lana. <br />
          Questa si è la mia tana
        </p>
        <button className="btn-nav text-xl text-blue-900 p-4 mt-12 font-bold shadow-md rounded-full hover:bg-blue-50">
          Leggi la mia biografia →{" "}
        </button>
      </div>

      <div className="subcategory-container">
        <h3 className="title text-6xl font-bold pt-40 pb-12">I miei lavori</h3>
        <div className="flex artwork-container justify-between items-center w-1/3 h-96">
          <p className="text-2xl italic leading-relaxed text-center py-64 px-24 border-4 border-blue-900 rounded-3xl">
            IMAGE
          </p>
          <p className="text-2xl italic leading-relaxed text-center py-64 px-24 border-4 border-blue-900 rounded-3xl">
            IMAGE
          </p>
          <p className="text-2xl italic leading-relaxed text-center py-64 px-24 border-4 border-blue-900 rounded-3xl">
            IMAGE
          </p>
        </div>
        <button className="btn-nav text-xl text-green-900 p-4 mt-12 font-bold shadow-md rounded-full hover:bg-green-50">
          Tutti i miei lavori →{" "}
        </button>
      </div>
      <div className="space"></div>
    </main>
  );
}
