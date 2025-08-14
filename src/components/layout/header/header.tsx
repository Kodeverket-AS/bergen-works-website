import NavBar from "../navigation/mobile/navbar";

export function Header() {
  return (
    <header className='flex flex-col gap-3 md:gap-6 w-full '>
      <NavBar />
    </header>
  );
}
