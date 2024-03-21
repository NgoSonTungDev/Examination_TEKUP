"use client";
import { dataList } from "@/assets/data";
import CardItem from "@/components/card-item";
import { types } from "@/types/commons";
import { useState } from "react";

const nav: types[] = [
  "All",
  "Manpower Supply",
  "Mobile/Websites",
  "UI/UX Design",
];

export default function Home() {
  const [active, setActive] = useState<types>("All");

  return (
    <div className="w-full bg-white flex justify-center ">
      <div className="w-[80%] h-full flex flex-col">
        <div className="w-full flex justify-center gap-4 py-4">
          {nav.map((item, index) => (
            <div
              className={` p-4 rounded font-bold cursor-pointer`}
              style={{ backgroundColor: active == item ? "#F8D000" : "#fff" }}
              key={index}
              onClick={() => {
                setActive(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4">
            {dataList[active].map((item, index) => (
              <CardItem img={item.image} title={item.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
