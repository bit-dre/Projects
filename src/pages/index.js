import Counter from "@/components/Counter";
import Stopwatch from "@/components/Stopwatch";
import StarRating from "@/components/StarRating";
import Accordion from "@/components/Accordion";
import ProgressBar from "@/components/ProgressBar";
import NestedChecks from "@/components/NestedChecks";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    {id:"tab1", label:"Counter"},
    {id:"tab2", label:"Stop watch"},
    {id:"tab3", label:"Star rating"},
    {id:"tab4", label:"Accordion"},
    {id:"tab5", label:"Progress Bar"},
    {id:"tab6", label:"Check Boxes"}
  ]

  const tabContent = {
    tab1: (<Counter />),
    tab2: (<Stopwatch />),
    tab3: (<StarRating />),
    tab4: (<Accordion />),
    tab5: (<ProgressBar />),
    tab6: (<NestedChecks />),
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[800px] rounded-3xl border bg-white p-8 mx-10 shadow-xl space-y-5">
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button key={tab.id} className={`px-4 py-2 font-semibold ${activeTab === tab.id ? "border-b-2 border-purple-500 text-purple-500" 
            : "text-gray-500 hover:text-purple-500"}`} 
            onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
        <div>
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
}
