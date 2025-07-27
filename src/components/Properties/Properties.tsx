"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia"
import { dataProperties } from "./Properties.data"
import { Transition } from "../Transition"
import { formatPrice } from "@/utils/formatPrice"

export function Properties() {
    const [counterHouses, setCounterHouses] = useState(8)
    const dataFilterHouses = dataProperties.slice(0, counterHouses)

    const loadMoreHouses = () => {
        setCounterHouses(counterHouses + 4)
    } 

    return (
        <Transition className="px-4 my-8 md:py-32 md:px-48">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dataFilterHouses.map(({ id, location, price, bedrooms, bathroom, image, star, meters }) => (
                    <Link key={id} href={`/properties/${id}`}
                        className="shadow-light hover:shadow-xl rounded2xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="relative -z-[1]">
                            <div className="relative">
                                <div className="absolute flex items-center px-2 py-2 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                                    <LiaStarSolid />
                                    <span className="ml-1 font-semibold">{star}</span>
                                </div>
                                <Image src={`/assets/properties/${image}`} alt="location" width={150} height={150} className="object-corver w-full max-h-full h-[200px] rounded-t-2xl" />
                                <div className="px-3 py-5">
                                    <p className="text-secondary">{location}</p>
                                    <p className="font-semibold">{formatPrice(price)}</p>
                                    <div className="gap-4 mt-2 xl:flex">
                                        <div className="flex items-center justify-center py-1 px-2 rounded-lg my-2 bg-slate-300/30">
                                        <LiaBedSolid />
                                        <span className="ml-2 ">{bedrooms}</span>
                                            </div>                 
                                              <div className="flex items-center justify-center py-1 px-2 rounded-lg my-2 bg-slate-300/30">
                                        <LiaBathSolid />
                                        <span className="ml-2 ">{bathroom}</span>
                                            </div>    
                                             <div className="flex items-center justify-center py-1 px-2 rounded-lg my-2 bg-slate-300/30">
                                        <LiaRulerCombinedSolid />
                                        <span className="ml-2 ">{meters}</span>
                                            </div>   
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center my-7">
                {counterHouses <  dataProperties.length && (
                    <button className=" px-5 py-6 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black" onClick={loadMoreHouses}>Ver más viviendas</button>
                )}
            </div>
        </Transition>
    )
}


// MINUTO 1:01:44 
