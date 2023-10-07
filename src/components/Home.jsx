import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Home = () => {
  const [countries, setContries] = useState([]);
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);

  return <div className="">{
        countries.map(country => <Country className="" key={country.name.common} country={country}></Country>)
    }
    </div>;
};

export default Home;
