import type { NextPage } from "next";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import Title from "../../components/Title";

const CreateConsultants: NextPage = () => {
  const [tab, setTab] = useState<"Information" | "Sessions">("Information");
  const [form, setForm] = useState({});

  const editForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((oldForm) => {
    const field = e.target.id;
    const newForm = JSON.parse(JSON.stringify(oldForm));
    newForm[field] = e.target.value;
    return newForm;
  });

  return (
    <div className="p-4 px-4 md:px-20 max-w-3xl">
      <Title title="Consultants" />

      <h1 className="text-xs mb-3 md:text-base">Create a consultant</h1>

      <div className="flex mb-8 gap-x-6">
        <p onClick={() => setTab("Information")} className={`px-2 text-gray-400 cursor-pointer ${tab === "Information" && "text-black border-b-primary border-b-4"}`}>
          Information
        </p>
        <p onClick={() => setTab("Sessions")} className={`px-2 text-gray-400 cursor-pointer ${tab === "Sessions" && "text-black border-b-primary border-b-4"}`}>
          Sessions
        </p>
        <span className="flex flex-1" />
        {tab === "Sessions" && <button className="w-12 border-2 rounded-md border-primary text-primary">+</button>}
      </div>

      {tab === "Information"
        ? <div className="flex flex-col md:flex-row gap-x-10 gap-y-4">
          <div className="max-w-min">
            <AiOutlineUser className="h-28 w-28 bg-slate-300 text-white" />
            <p className="mt-1 text-right text-xs text-primary">Edit profile</p>
          </div>
          <form className="relative flex flex-col">
            <label htmlFor="name" className="text-sm">Consultant name</label>
            <input id="name" placeholder="Enter name" onChange={editForm} className="md:w-[600px] mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
            <label htmlFor="email" className="text-sm">Email Address</label>
            <input id="email" placeholder="Enter email address" onChange={editForm} className="md:w-[600px] mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
            <label htmlFor="university" className="text-sm">University</label>
            <input id="university" placeholder="Enter university name" onChange={editForm} className="md:w-[600px] mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
            <label htmlFor="specialization" className="text-sm">Specialization</label>
            <input id="specialization" placeholder="Enter specialization" onChange={editForm} className="md:w-[600px] mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
            <div className="flex flex-col md:flex-row gap-x-2">
              <div className="flex flex-col flex-1">
                <label htmlFor="year" className="text-sm">Year</label>
                <input id="year" placeholder="E.g. Final Year" onChange={editForm} className="mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="country" className="text-sm">Country</label>
                <input id="country" placeholder="Select Country" onChange={editForm} className="mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
              </div>
            </div>
            <label htmlFor="biography" className="text-sm">Bio</label>
            <textarea id="biography" onChange={editForm} className="md:w-[600px] h-40 mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
            <button className="self-end w-36 py-2 rounded-lg text-white text-sm bg-primary-light hover:bg-primary transition-colors">
              Create New
            </button>
          </form>
        </div>
        : <p className="text-gray-300">Work in progress</p>
      }

    </div>
  );
};

export default CreateConsultants;
