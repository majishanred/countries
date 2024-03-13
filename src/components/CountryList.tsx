import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import CountryBadge from "./CountryBadge";

type Region = 'africa' | 'asia' | 'americas' | 'oceania' | 'europe' | null;

export default function CountryList() {
  const ref = useLoaderData() as any[];
  const [countries, setCountries] = useState(ref);
  const [text, setText] = useState('');

  useEffect(() => {
    setCountries(ref);
    setText('');  
  }, [ref]);

  useEffect(() => {
    setCountries(ref.filter(e => {
      if(text == '') return true;
      return e.name.common.toLowerCase().includes(text.toLowerCase());
    }));
  }, [text]);

  const regions: Region[] = [
    'africa',
    'asia',
    'americas',
    'europe',
    'oceania',
    null
  ];

  return (
    <>
      <div className="flex text-blue-dark-text h-10 items-stretch dark:text-white">
        <div className="dark:bg-blue-dark w-1/3 flex rounded light_box_shadow">
          <div className="w-1/6 h-full flex items-center justify-center">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <input id='country-filter' className="dark:bg-blue-dark rounded grow" onChange={(e) => setText(e.target.value)} content={text}></input>
        </div>
        <div className="ml-auto flex gap-5 flex-wrap">
          { regions.map(e => <Link className="capitalize flex h-full items-center px-4 rounded-lg light_box_shadow dark:bg-blue-dark" to={e != null ? `/?region=${e}` : '/'}>{e != null ? e : 'none'}</Link>)}
        </div>
      </div>
      <div className="grid xl:grid-cols-4 auto-rows-[320px] gap-16 text-[14px] mt-6">
        { countries.map(elem => <CountryBadge country={elem}/>)}
      </div>
    </>
  )
};