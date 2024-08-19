"use client";
import TotalFarmTable from "@/components/TotalFarmTable";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="dark:bg-gradient-to-l  dark:from-black  dark:to-[#250811]  pb-32">
        <TotalFarmTable />
        <HowItWorks />
        <Team />
      </div>
    </Layout>
  );
}
