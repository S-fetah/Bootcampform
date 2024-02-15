import NavBar from "../Components/NavBar";
import Formulaire from "../Components/Formulaire";
function Form() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex justify-around content-center min-w-fit">
        <Formulaire />
        <img
          src="./astronut.svg"
          alt=""
          className="w-[393px] h-[467px] mt-[40px]"
        />
      </main>
      <footer></footer>
    </>
  );
}
export default Form;
