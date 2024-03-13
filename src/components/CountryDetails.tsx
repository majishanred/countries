import { Link, useLoaderData } from "react-router-dom";

export default function CountryDetails() {
  const country = (useLoaderData() as any[])[0];
  const population = (country.population as number).toString()
    .split('').reverse().reduce((prev, curr, ind, arr) => {
      return (ind + 1) % 3 == 0 && ind < arr.length - 1 ? prev + curr + ',' : prev + curr
    }, '').split('').reverse().reduce((prev, cur) => {
      return prev += cur;
    }, '');
  
  const languages = Object.values<string>(country.languages).reduce((prev, cur) => {
    return prev += cur + ', ';
  }, '').slice(0, -2);

  return (
    <>
      <Link to='/' className="light_box_shadow w-32 h-10 dark:bg-blue-dark rounded-lg flex items-center justify-center gap-3">
        <div className='inline-flex translate-y-0.5'>
          <ion-icon name="arrow-back-sharp"></ion-icon>
        </div>
        <span>Back</span>
      </Link>
      <div className="mt-12 grid grid-cols-2 gap-10 grid-rows-[min-content] text-[16px]">
        <img className="h-full w-auto max-h-[300px] light_box_shadow" src={country.flags.svg}></img>
        <div className="flex flex-col py-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-[32px]">{country.name.common}</h3>
            <div className="flex gap-10 flex-wrap">
              <div className="flex flex-col gap-2">
                <p><span>Official Name: </span>{country.name.official}</p>
                <p><span>Population: </span>{population}</p>
                <p><span>Region: </span>{country.region}</p>
                <p><span>Sub Region: </span>{country.subregion}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p><span>Capital: </span>{country.capital}</p>
                <p><span>Top Level Domain: </span>{country.tld}</p>
                <p><span>Languages: </span>{languages}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-14 flex-wrap items-center">
            { country.borders == null ? <span>There is no neighbors!</span> : 
              <>
                <span>Border Countries:</span>
                {country.borders?.map(e => <div className="w-20 h-8 flex justify-center items-center light_box_shadow dark:bg-blue-dark">{e}</div>)}
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}