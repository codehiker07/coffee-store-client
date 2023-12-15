import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="max-w-max mx-auto">
      <h1 className="text-6xl text-center my-20 text-purple-600 font-bold">
        Hot Hot Cold Coffee : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
