import React from "react";
import "./Card.scss";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";

// Define the types for the props
type CardProps = {
  image: string;
  title?: string; // The '?' marks the text as an optional prop
  text: string;
  buttonLabel: string;
  link: string;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  text,
  buttonLabel,
  link,
}) => {
  return (
    <div className="card-body">
      <div className="card-img">
        <img src={image} alt={title ?? "Card Image"} />
      </div>
      <div className="card-text-section">
        <h3 className="card-text">{title && <p>{title}</p>}</h3>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-button">
        <Link to={link}>
          <ButtonComponent>{buttonLabel}</ButtonComponent>
        </Link>
      </div>
    </div>
  );
};

export default Card;
