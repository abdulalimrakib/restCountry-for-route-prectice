import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState({});
  const { name } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((country) => setCountryDetails(country));
  }, [name]);

  console.log(countryDetails[0].area);

  return (
    <div>
      {/* <div>
            <img src={countryDetails.flags.svg} alt="" />
        </div> */}
      <h2 className="text-[36px] font-medium py-3">{}</h2>
    </div>
  );
};

export default CountryDetails;
