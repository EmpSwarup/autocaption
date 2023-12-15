"use client";

import UploadIcon from "@/components/UploadIcon";

export default function UploadForm() {
  function upload(ev) {
    ev.preventDefault();
    console.log(ev);
  }
  return (
    <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
      <UploadIcon />
      <span>Choose file</span>
      <input onChange={upload} type="file" className="hidden" />
    </label>
  );
}
