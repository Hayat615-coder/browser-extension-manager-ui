import "./App.css";
import logo from "./assets/logo.svg";
import sun from "./assets/icon-sun.svg";
import { Information } from "./info";
import { useState } from "react";

const App = () => {
  const [infos, setInfos] = useState(Information);

  const showAll = () => setInfos(Information);
  const showActive = () =>
    setInfos(Information.filter((item) => item.isActive));
  const showInactive = () =>
    setInfos(Information.filter((item) => !item.isActive));

  return (
    <div className="md:mx-36 mx-4">
      <header className="my-4 flex flex-row items-center justify-between rounded-lg bg-[hsl(225,23%,24%)] p-2">
        <img src={logo} alt=" logo" className="text-white" />
        <button type="button">
          <img
            src={sun}
            alt="sun"
            className="rounded-lg bg-[hsl(226,11%,37%)] p-2"
          />
        </button>
      </header>

      <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
        <p className="text-2xl font-bold">Extensions List</p>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            onClick={showAll}
            className="cursor-pointer rounded-2xl bg-[hsl(225,23%,24%)] px-3 py-1 hover:bg-[hsl(3,71%,56%)]"
          >
            All
          </button>
          <button
            type="button"
            onClick={showActive}
            className="cursor-pointer rounded-2xl bg-[hsl(225,23%,24%)] px-3 py-1 hover:bg-[hsl(3,71%,56%)]"
          >
            Active
          </button>
          <button
            type="button"
            onClick={showInactive}
            className="cursor-pointer rounded-2xl bg-[hsl(225,23%,24%)] px-3 py-1 hover:bg-[hsl(3,71%,56%)]"
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {infos.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-lg bg-[hsl(225,23%,24%)] p-3"
          >
            <div className="flex flex-row gap-3">
              <img src={item.picture} alt={item.name} className="w-16 h-16" />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p className="text-[hsl(0,0%,78%)]">{item.activity}</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <button type="button" className="text-white">
                {item.controler}
              </button>
              <div
                className={`relative h-5 w-10 rounded-full ${
                  item.isActive
                    ? "bg-[hsl(3,71%,56%)]"
                    : "bg-[hsl(226,11%,37%)]"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                    item.isActive ? "left-5" : "left-0.5"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
