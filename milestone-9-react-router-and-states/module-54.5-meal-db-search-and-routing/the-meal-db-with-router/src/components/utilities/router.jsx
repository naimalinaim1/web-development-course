import App from "../../App";
import FoodDetails from "../FoodDetails/FoodDetails";
import Home from "../Home/Home";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Restaurant from "../Restaurant/Restaurant";

const pathRouter = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "restaurant",
        element: <Restaurant />,
        loader: async () =>
          // fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c"),
          fetch("/food.json"),
      },
      {
        path: "foodDetails/:foodId",
        element: <FoodDetails />,
        loader: ({ params }) => params.foodId,
      },
      {
        path: "mealdb",
        element: <p>Meal DB</p>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default pathRouter;
