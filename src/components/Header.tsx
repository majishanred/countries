declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['ion-icon']: { name: string };
    }
  }
}

export function Header({theme, setTheme}: { theme: string, setTheme: Function}) {
  return (
    <header 
      className="flex flex-row w-full h-[4em] shadow-md text-[18px] px-14 items-center bg-gray-light dark:bg-blue-dark text-blue-very-dark-text dark:text-white">
      <h1 className="text-[32px]">What's in the World?</h1>
      <button className='ml-auto text-[16px] flex items-center gap-2' onClick={() => {
        theme == 'dark' ? setTheme('light') : setTheme('dark');
      }}>
        { 
          theme == "dark" ? 
            <ion-icon name="moon"></ion-icon> : 
            <ion-icon name="moon-outline"></ion-icon>
        }
        <span className="capitalize">{theme}</span>
      </button>
    </header>
  )
}