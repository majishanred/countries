import { Link } from "react-router-dom";

export default function CountryBadge({country}: {country: any}) {
  const population = (country.population as number).toString()
    .split('').reverse().reduce((prev, curr, ind, arr) => {
      return (ind + 1) % 3 == 0 && ind < arr.length - 1 ? prev + curr + ',' : prev + curr
    }, '').split('').reverse().reduce((prev, cur) => {
      return prev += cur;
    }, '');

  return (
    <Link to={country.name.common.toLowerCase()} className="flex flex-col light_box_shadow dark:bg-blue-dark rounded-xl">
      <img className="h-1/2 object-cover rounded-t-xl" src={country.flags.svg}></img>
      <div className="flex flex-col h-1/2 px-5 py-5 gap-1">
        <h3 className="text-[18px]">{country.name.common}</h3>
        <p><span>Population</span>: {population}</p>
        <p><span>Region</span>: {country.region}</p>
        <p><span>Capital</span>: {country.capital}</p>
      </div>
    </Link>
  )
};