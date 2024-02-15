export default function NavBar(props) {
  const { path } = props || "";
  console.log(path);

  return (
    <nav className=" p-5 w-[1280px] m-auto">
      <ul className="flex justify-between gap-10 ">
        <div className="flex grow ">
          <img
            src="./logo.png"
            alt="techverseLogo"
            className="mr-10 w-[63px] h-[42px]"
          />

          <h2 className="text-white  text-3xl font-semibold  ">Techverse</h2>
        </div>
        <li className="text-lg font-semibold p-3 leading-3 text-center w-[87] h-[46]  text-white rounded-xl  hover:text-gray-300 bg-[#05060F] ">
          <a href="/home">Home</a>
        </li>

        {path != "/signedup" && (
          <li className=" text-white text-center p-1 text-lg font-semibold w-[134px] h-[46px]  border-[2px] border-white  bg-[#0E052B] rounded-xl hover:text-gray-300">
            <a href="/form">Form</a>
          </li>
        )}
      </ul>
    </nav>
  );
}
