import { Cards } from '@/components/Cards';
import React from 'react';

const artworks: string[] = [
  "red_horse_swing-1.jpeg",
  "cross_murales.jpeg",
  "kids_copy.jpeg",
  "pinocchio_piece.jpeg",
  "exlibris.jpeg",
  "portami_su.jpeg",
  "mustache_man.jpeg",
  "woods_and_stones_moon.jpeg",
]

export default function Artworks(){
    return (
        <div className="page-artworks-container flex flex-col items-center h-full">
            <div className="my-20 flex flex-col">
            <h1 className="text-xl text-center font-bold md:text-3xl">"It is only when we are no longer fearful that we begin to create..."</h1>
            <h2 className="italic md:text-md text-sm text-end pt-2">- J. M. W. Turner</h2>
            </div>
        <div className="artworks-container flex w-full m-10">
            <div className="cards">
            <Cards images={artworks} />
            </div>
        </div>
        </div>
    )
}
