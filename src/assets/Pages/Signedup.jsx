import NavBar from "../Components/NavBar";
export default function Signedup() {
  return (
    <>
      <header>
        <NavBar path="/signedup" />
      </header>
      <main>
        <img
          src="./signed.svg"
          alt="ALL Ready ......!"
          className="w-[239px] h-[397px] text-center m-auto mt-20"
        />
        <h2 className="text-4xl text-white font-bold text-center">
          Congrats, You are registered in the 101#bootcamp.
        </h2>
      </main>
    </>
  );
}
