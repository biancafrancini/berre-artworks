import { Cards } from "@/components/Cards";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React, { useState, useRef } from "react";

/*const artworks: string[] = [
  "red_horse_swing-1.jpeg",
  "cross_murales.jpeg",
  "kids_copy.jpeg",
  "pinocchio_piece.jpeg",
  "exlibris.jpeg",
  "portami_su.jpeg",
  "mustache_man.jpeg",
  "woods_and_stones_moon.jpeg",
];*/

const artworks = [
  {
    id: 1,
    title: "Red Horse Swing",
    year: "2007",
    dims: "30x24x10",
    technique: "Tempera su legno",
    description:
      "“Dirmi dovrai, se sarò sveglio, quel ch’è peggio, quel ch’è meglio cosicchè con pochi danni ti saluti anch’a cent’anni”. La vena etno antropologica dell’artista si lancia in un augurio per l’amica, coetanea, che compie 50 anni  con un piccolo cavallo a dondolo a simboleggiare l’ancora giovanile spirito che anima ambedue.",
    exhibitions: ["Collezione privata"],
    image: "red_horse_swing-1.jpeg",
  },
  {
    id: 2,
    title: "Cross - Murales",
    year: "1990",
    dims: "52,5x76",
    technique: "Polimaterico e tecnica mista",
    description:
      "Uno scudo e una spada contro mostri e ciminiere fumanti, contro quei colori forti e cupi mischiati ad un rosso sangue che contorna la parola GUERRA come un murales evocativo di catastrofe imminente.",
    exhibitions: ["Collezione privata"],
    image: "cross_murales.jpeg",
  },
  {
    id: 3,
    title: "Gramsci",
    year: "1999",
    dims: "33x25",
    technique: "Disegno a matita",
    description:
      "Il quadro evoca la figura di Gramsci a cui Berrettini è legato da profonde convinzioni alle quali , come dice l’artista anche nella scritta, non rinuncerebbe mai. Convinzioni impresse nella figura seriosa, in cravatta del ritratto al quale è concesso un tiepido rosso sfumato dietro la testa alla sua sinistra, alla destra di chi guarda.",
    exhibitions: ["Collezione privata"],
    image: "mustache_man.jpeg",
  },
  {
    id: 4,
    title: "Pinocchio",
    year: "2023",
    dims: "50x35x8",
    technique: "Tempera su legno",
    description:
      "C’era una volta un pezzo di legno …. che inneggia al volersi bene dandosi la mano per avere un orizzonte meno lontano… L’artista racchiude in questi due pezzi di legno la speranza di un domani migliore affidandosi alla favola di pinocchio e alla canzone di Sergio Endrigo colorando il tutto con tinte e tonalità infantilmente sgargianti.",
    exhibitions: ["Collezione privata"],
    image: "pinocchio_piece.jpeg",
  },
  {
    id: 5,
    title: "EX Libris - senza titolo",
    year: "2023",
    dims: "50x35x8",
    technique: "Stampa",
    description:
      "Si suppone che l’opera risalga agli anni ‘80 realizzata come dono agli amici Patrizia e Giancarlo dove l’autore riporta la sigla del gruppo musicale  CCCP giocando tra questa e la sigla del PCI , etci e simboli vari , tutti temi che accomunano l’artista agli amici con un richiamo al tempo che passa scandito dai tic tac inseriti nella parte inferiore dell’ex-libris.",
    exhibitions: ["Collezione privata"],
    image: "exlibris.jpeg",
  },
  {
    id: 6,
    title: "Portami su",
    year: "2023",
    dims: "82x29",
    technique: "Olio e tempera su legno",
    description:
      "Un volo per andare su portati da una mongolfiera con finale di merletto quasi svolazzante a far immaginare il movimento dell’aria nella salita mossa dalla figura tipica , segno distintivo dell’artista, che plasticamente , dal merletto, spinge in alto. Una donna china con le braccia appoggiate al cesto che anela ad una vista più grande , come da un balcone.",
    exhibitions: ["Collezione privata"],
    image: "portami_su.jpeg",
  },
  {
    id: 7,
    title: "Viandante",
    year: "2023",
    dims: "",
    technique: "Polimaterico",
    description:
      "Il viandante che è stato rassicurato di trovare la terra che sperava nell’andare dell’età non disdegna Provvidenza e Fortuna che lo possano far guardare in alto, lassù verso la luna. L’artista inserisce al centro dell’opera una pietra ovale simile ad una ghianda dei colori del cielo e della terra quasi una composizione da paesaggio lunare stranamente colorato e vivo.",
    exhibitions: ["Collezione privata"],
    image: "viandante.jpeg",
  },
  {
    id: 8,
    title: "Moon Woods and Stones",
    year: "---",
    dims: "---",
    technique: "---",
    description: "---",
    exhibitions: ["Collezione privata"],
    image: "woods_and_stones_moon.jpeg",
  },
  {
    id: 9,
    title: "Volleyball",
    year: "",
    dims: "",
    technique: "Polimaterico",
    description: "",
    exhibitions: ["Collezione privata"],
    image: "volleyball.jpeg",
  },
  {
    id: 10,
    title: "Female toilet",
    year: "1984",
    dims: "104x34",
    technique: "Matita su cartoncino",
    description:
      "Una donna siede dimessa su una linea, sull’orizzonte  della vita ? Su un’alba o un tramonto che lasciano volare un aquilone fatto di tanti quadratini dorati …. Una donna che espande la sua sanguinea vita a ristoro di flotte di ominidi.",
    exhibitions: ["Personale – Giugno 2021, Sala Set, Poggibonsi"],
    image: "female_toilet.jpeg",
  },
  {
    id: 11,
    title: "Kids",
    year: "--",
    dims: "--",
    technique: "--",
    description: "--",
    exhibitions: ["--"],
    image: "kids_copy.jpeg",
  },
  // {
  //     id: 12,
  //     title: "Superman",
  //     year: "2024 ca.",
  //     dims: "",
  //     technique: "Olio su legno",
  //     description: "Un supereroe così l’artista si è sentito chiamando a raccolta Nembo Kid, Superman e Braccio di ferro fino a quando non riesce a capire che non ci sono spinaci o costumi da indossare se non un semplice saio, un’anima essenziale di cui è fatta la vita in tutti gli anni che trascorrono come foglie di un albero caduche.",
  //     exhibitions: ["Collezione privata della famiglia Berrettini"],
  //     image: "superman.jpeg", //* da aggiungere *//
  // },
  // {
  //     id: 13,
  //     title: "Una morte",
  //     year: "",
  //     dims: "",
  //     technique: "Matita su carta",
  //     description: "Una morte incombe su tutta l’opera con tumultuosi e graffianti segni alle sue spalle . Solo una linea protegge la figura a capo chino, stremata mentre nel riquadro la figura d’uomo combatte le sue battaglie.",
  //     exhibitions: ["Collezione privata"],
  //     image: "una_morte.jpeg", //* da aggiungere *//
  // },
  // {
  //     id: 14,
  //     title: "Il dromedario",
  //     year: "2020",
  //     dims: "70x50",
  //     technique: "Olio su tela",
  //     description: "Un dromedario che si immerge in acqua salata e che per questo sembra non bere ma solo “sciacquare” la gobba mentre annaspa per poter rimanere a galla. Una gobba bianca su una faccia nera con un disperato segno di vita rappresentato da un piccolo cipresso al centro della gobba.",
  //     exhibitions: ["Personale – Giugno 2021, Sala Set, Poggibonsi"],
  //     image: "dromedario.jpeg", //* da aggiungere *//
  // },
  // {
  //     id: 15,
  //     title: "Tana",
  //     year: "",
  //     dims: "",
  //     technique: "",
  //     description: "",
  //     exhibitions: ["Collezione privata"],
  //     image: "tana.jpeg", //* da aggiungere *//
  // },
];

export default function Artworks() {
  const contactsRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="page-artworks">
      <div className="page-artworks-container flex flex-col items-center h-full w-full">
        <Navbar contacts={contactsRef} />
        <div className="md:mt-60 mt-52 md:mb-20 mb-4 md:mx-0 mx-20 flex flex-col">
          <h1 className="text-center font-bold md:text-3xl text-2xl">
            "It is only when we are no longer fearful that we begin to
            create..."
          </h1>
          <h2 className="italic md:text-md text-sm md:text-end text-center pt-2">
          J. M. W. Turner
          </h2>
        </div>
        <div className="artworks-container flex w-full m-10">
          <div className="cards">
            <Cards images={artworks} />
          </div>
        </div>
      </div>
      <div ref={contactsRef}>
        <Footer />
      </div>
    </div>
  );
}
