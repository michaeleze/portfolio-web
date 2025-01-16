"use client"

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    posterUrl: string;
    rating: string;
  };
  onClick?: () => void;
};

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
      <Card
        className="rounded-sm overflow-hidden cursor-pointer group"
        onClick={onClick}
      >
        <CardContent className="p-0 relative">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            width={100}
            height={100}
            objectFit="cover"
            priority
            className="max-w-none w-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-semibold text-lg">{movie.title}</h3>
            <p className="text-white/80 text-sm">{movie.rating}</p>
          </div>
        </CardContent>
      </Card>
  );
};
