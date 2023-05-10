import React from "react";
import Card from "../Card/Card";
import { useLoaderData, useNavigation } from "react-router-dom";

const Restaurant = () => {
  const navigation = useNavigation();
  const state = navigation.state;

  const foods = useLoaderData();
  return (
    <div>
      {state === "loading" ? (
        <h1 className="text-lg text-center font-semibold">Loading</h1>
      ) : (
        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {foods.meals.map((food) => (
            <Card key={food.idMeal} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurant;
