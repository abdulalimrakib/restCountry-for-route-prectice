import { Link } from "react-router-dom";

const Country = (props) => {
  // console.log(props.country)
  const { common, official } = props.country.name;

  return (
    <div className="flex py-5 gap-8 pl-10 bg-gray-300">
      <div className="w-[400px]">
        <img
          className="w-full h-[200px]"
          src={props.country.flags.svg}
          alt=""
        />
      </div>
      <div className="">
        <h2 className="text-[36px] font-medium py-3">{common}</h2>
        <p>Population: {props.country.population}</p>
        <p>Official name: {official}</p>
        <Link to = {`/${common}`}>
          <button className="mt-5 text-white rounded-lg shadow-lg hover:text-gray-700 hover:bg-white py-1 px-5 text-[20px] font-bold bg-gray-700">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Country;
