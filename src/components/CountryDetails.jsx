import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState({});
  const { name } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((country) => setCountryDetails(country));
  }, []);
  console.log(countryDetails[0]);
  if (countryDetails[0]) {
    return (
      <div className="flex justify-center text-center pt-10 bg-gray-400">
        <div>
          <div>
            <img className="h-[300px]" src={countryDetails[0].flags.svg} alt="" />
          </div>
          <div>
            <h2 className="text-[36px] font-medium py-5">
              {countryDetails[0].name.common}
            </h2>
            <h2 className="text-[24px] font-medium py-1">
            Official name: {countryDetails[0].name.official}
            </h2>
            <h2 className="text-[24px] font-medium py-1">
            capital: {countryDetails[0].capital}
            </h2>
            <h2 className="text-[24px] font-medium py-1">
            population: {countryDetails[0].population}
            </h2>
            <h2 className="text-[24px] font-medium py-1">
            continents: {countryDetails[0].continents}
            </h2>
          </div>
        </div>
      </div>
    );
  }
};

export default CountryDetails;
