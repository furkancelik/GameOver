"use client";
import { FARMER_TABLE } from "@/lib/data";
import { useEffect, useState } from "react";

export default function TotalFarmTable() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Tarayıcıda olduğumuzdan emin olun
    if (typeof window !== "undefined") {
      // window.innerHeight'i sadece tarayıcıda mevcut olduğunda set edin
      setWindowHeight(window.innerHeight / 2);

      const handleScroll = () => {
        const offset = window.scrollY;
        setScrollY(offset);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-center gap-x-16">
      {FARMER_TABLE.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center transform`}
          style={{
            transform: `translateY(${
              -100 + Math.min((scrollY / windowHeight) * 100, 100)
            }%)`,
          }}
        >
          <div className="bg-[url('/images/rope-bg.png')] bg-no-repeat bg-bottom bg-cover w-5 h-28 z-10"></div>
          <div className="bg-[#ffc77a] border border-[#c88342] w-60 p-4 pt-9 pb-5 -translate-y-7 rounded-lg shadow-md text-center">
            <h3 className="text-2xl">{item.title}</h3>
            <div className="text-4xl font-semibold">{item.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
