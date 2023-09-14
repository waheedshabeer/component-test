import DropDown from "./components/DropDown";

export default function App() {
  return (
    <div
      className="bg-[#484848] flex 
    flex-col gap-3 m-auto mt-32 p-4 w-[400px]
     m-4 rounded"
    >
      <div className="flex flex-row gap-32">
        <button className="bg-[#6D6D6D] text-slate-100 p-1 w-[25px] h-[25px] flex items-center justify-center  font-thin text-sm rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <p className="text-slate-200">Schedule Details</p>
      </div>
      <div className="flex flex-row gap-7 items-center ">
        <p className="text-slate-200 text-sm font-semibold ">Start</p>
        <DropDown message={"May 16, 2023"} />
        <p>-</p>
        <DropDown message={"Set Time"} />
      </div>
      <div className="flex flex-row gap-7 items-center ">
        <p className="text-slate-200 text-sm font-semibold ">Ends</p>
        <DropDown message={"May 16, 2023"} />
        <p>-</p>
        <DropDown message={"Set Time"} />
      </div>
      <textarea
        placeholder="Notes"
        className="text-center rounded-md bg-[#6D6D6D] py-2 text-sm h-[90px] "
      />
      <button className="rounded-full p-2 bg-gradient-to-r font-bold from-[#887DFD] to-[#006AFA] w-[105px]  m-auto text-white">
        Save
      </button>
    </div>
  );
}
