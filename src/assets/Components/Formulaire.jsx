import { useState } from "react";
export default function Formulaire() {
  const [firstWorkshop, setFirstWorkshop] = useState("");
  const [secondWorkshop, setSecondWorkshop] = useState("");

  const handleFirstWorkshopChange = (event) => {
    const selectedWorkshop = event.target.value;
    setFirstWorkshop(selectedWorkshop);

    // Reset second workshop if it's the same as the first one
    if (selectedWorkshop === secondWorkshop) {
      setSecondWorkshop("");
    }
  };

  const handleSecondWorkshopChange = (event) => {
    const selectedWorkshop = event.target.value;
    setSecondWorkshop(selectedWorkshop);

    // Reset first workshop if it's the same as the second one
    if (selectedWorkshop === firstWorkshop) {
      setFirstWorkshop("");
    }
  };
  return (
    <form
      style={{
        background:
          " linear-gradient(to right, rgba(255, 255, 255, 0.264), rgba(255, 255, 255, 0.078))",
        border: "1px solid",
        borderImageSource:
          "linear-gradient(111.66deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 116.94%)",
        boxShadow: " 0px 20px 40px 0px #0000001A",
      }}
      className="w-[598px] h-[726px] text-white  text-center font-bold  border-[1px] rounded-[46px] leading-[26px] p-[30px]  border-white bg-gradient-to-r from-  to-blue-500"
    >
      <h1 className="text-4xl ">Sign Up</h1>
      <div className="flex flex-wrap mt-[20px] justify-around items-center content-between gap-8 ">
        <input
          type="text"
          name="nom"
          id=""
          placeholder="NOM :"
          className="h-[62px] w-[248px] border-[1px] rounded-[46px] border-[#999]  bg-transparent pl-[10px]"
          required
          autoFocus
        />
        <input
          type="text"
          name="prenom"
          id=""
          placeholder="PRENOM :"
          className="h-[62px] w-[248px] border-[1px] rounded-[46px]  pl-[10px] border-[#999]  bg-transparent"
          required
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="EMAIL :"
          className="h-[62px] w-[531px] border-[1px]  rounded-[46px]  pl-[10px] border-[#999]  bg-transparent"
          required
        />
        <input
          type="text"
          name="specialite"
          id=""
          placeholder="SPECIALITE :"
          className="h-[62px] w-[248px] border-[1px] rounded-[46px] border-[#999] bg-transparent pl-[10px] "
          required
        />
        <input
          type="number"
          name="matricule"
          id=""
          placeholder="MATRICULE :"
          maxLength={"12"}
          className="h-[62px] w-[248px] border-[1px] rounded-[46px] border-[#999]  bg-transparent pl-[10px]"
          required
        />
        <select
          name="firstWorkshop"
          id="firstWorkshop"
          className="h-[62px] w-[248px] border-[1px] rounded-[46px] border-[#999]  bg-transparent pl-[10px] text-[#999]"
          value={firstWorkshop}
          onChange={handleFirstWorkshopChange}
          required
        >
          <option value="" disabled hidden>
            WORKSHOP 1:
          </option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="mobile-apps">Mobile Apps</option>
          <option value="design">Design</option>
        </select>
        <select
          name="secondWorkshop"
          id="secondWorkshop"
          className="h-[62px] text-[#999]  w-[248px] border-[1px] rounded-[46px] border-[#999]  bg-transparent pl-[10px]"
          value={secondWorkshop}
          onChange={handleSecondWorkshopChange}
          required
        >
          <option value="" disabled hidden>
            WORKSHOP 2 :
          </option>
          {["frontend", "backend", "mobile-apps", "design"]
            .filter((option) => option !== firstWorkshop)
            .map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
        </select>
        <select
          name="firstWorkshoplvl"
          id="firstWorkshoplvl"
          className=" w-[248px] text-[#999] h-[62px] border-[1px] rounded-[46px] border-[#999]  bg-transparent pl-[10px]"
          required
        >
          <option value="" hidden selected disabled>
            WORKSHOP 2 Level :
          </option>
          <option value="newbie">newbie</option>
          <option value="intermediate"> Intermediate</option>
          <option value="aboveintermediate"> Above Intermediate</option>
        </select>

        <select
          name="secondworkshoplvl"
          id="secondworkshoplvl"
          className=" w-[248px] text-[#999] h-[62px] border-[1px] rounded-[46px] border-[#999]  bg-transparent pl-[10px]"
          required
        >
          <option value="" hidden selected disabled>
            WORKSHOP 2 Level :
          </option>
          <option value="newbie">newbie</option>
          <option value="intermediate"> Intermediate</option>
          <option value="aboveintermediate"> Above Intermediate</option>
        </select>
        <input
          type="submit"
          name="submit"
          id=""
          value={"SIGN UP"}
          className="w-[128px] h-[59px] border-[1px]  bg-[#5627FF] rounded-[43px] p-3 border-white"
        />
        <a
          href="/signedup"
          className="w-[128px] h-[59px] border-[1px]  bg-[#5627FF] rounded-[43px] p-3 border-white"
        >
          Submit
        </a>
      </div>
    </form>
  );
}
