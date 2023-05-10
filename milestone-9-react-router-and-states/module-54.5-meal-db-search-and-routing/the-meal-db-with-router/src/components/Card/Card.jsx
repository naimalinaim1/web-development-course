import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ food }) => {
  const { idMeal, strMealThumb, strMeal, strCategory, strInstructions } = food;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/foodDetails/${idMeal}`);
  };

  return (
    <div className="card bg-base-100 border">
      <figure>
        <img src={strMealThumb} alt={strCategory} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{strMeal}</h2>
        <p>{strInstructions.slice(0, 200)}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-secondary" to={`/foodDetails/${idMeal}`}>
            Details
          </Link>
          <button onClick={handleNavigate} className="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
