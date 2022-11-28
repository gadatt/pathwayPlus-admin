import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Title from "../../components/Title";

const CreateEvent: NextPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [src, setSrc] = useState("/assets/no_image.png");

  const editForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((oldForm) => {
    const field = e.target.id;
    const newForm = JSON.parse(JSON.stringify(oldForm));
    newForm[field] = e.target.value;
    return newForm;
  });

  const saveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      const file = fileList[0];
      const url = URL.createObjectURL(file);
      setSrc(url);
    }
  };

  return (
    <div className="mb-10 p-4 px-4 md:px-20 max-w-3xl">
      <Title title="Events" />

      <div className="flex flex-col md:flex-row">

        <AiOutlineArrowLeft onClick={router.back} className="mr-5 mb-4 text-xl cursor-pointer text-primary" />

        <div className="flex flex-col w-full">
          <h1 className="mb-3">Create New Event</h1>

          <form className="relative flex flex-col">
            <div className="flex flex-col mb-6 max-w-max">
              <Image layout="fixed" height={220} width={320} src={src} className="rounded-lg" />
              <label htmlFor="img" className="text-blue text-sm text-right cursor-pointer">Choose image</label>
              <input required type="file" id="img" name="img" accept="image/*" onChange={saveImage} className="hidden" />
            </div>

            <div className="md:flex gap-x-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="name" className="text-sm">Event Name</label>
                <input required id="name" onChange={editForm} className="mt-1 mb-6 p-2 text-sm border-2 rounded-md" />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="organizer" className="text-sm">Organizer</label>
                <input required id="organizer" onChange={editForm} className="mt-1 mb-6 p-2 text-sm border-2 rounded-md" />
              </div>
            </div>
            <div className="md:flex gap-x-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="date" className="text-sm">Date</label>
                <input required id="date" type="date" onChange={editForm} className="mt-1 mb-6 p-2 text-sm border-2 rounded-md" />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="time" className="text-sm">Time</label>
                <input required id="time" type="time" onChange={editForm} className="mt-1 mb-6 p-2 text-sm border-2 rounded-md" />
              </div>
            </div>
            <label htmlFor="location" className="text-sm">Venue</label>
            <input required id="location" placeholder="Location" onChange={editForm} className="w-full md:w-[600px] mt-1 mb-6 p-2 text-sm border-2 rounded-md" />
            <label htmlFor="description" className="text-sm">Description</label>
            <textarea id="description" onChange={editForm} className="md:w-[600px] h-40 mt-1 mb-4 p-2 text-sm border-2 rounded-md" />
            <label htmlFor="link" className="text-sm">Register Link</label>
            <input required id="link" type="url" placeholder="Google form link or email for applying position" onChange={editForm} className="w-full md:w-[600px] mt-1 mb-6 p-2 text-sm border-2 rounded-md" />

            <button className="w-32 py-4 rounded-lg text-white text-sm bg-primary-light hover:bg-primary transition-colors">
              Create
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default CreateEvent;
