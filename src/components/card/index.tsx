import Image from "next/image";
import React from "react";
import "./card.css";

interface CardProps {
  card: {
    id: number;
    image: string;
    title: string;
    subTitle: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <article className="card-section">
      <div className="card-image">
        <Image
          src={card.image}
          layout="fill"
          objectFit="cover"
          alt={card.title}
        />
      </div>
      <div className="text-center text-section p-4 primary-color">
        <h3 className="roboto">
          <strong>{card.title}</strong>
        </h3>
        <h4 className="roboto-serif pt-2">{card.subTitle}</h4>
      </div>
    </article>
  );
};

export default Card;
