"use client";

import UploadIcon from "@/components/UploadIcon";
import axios from "axios";

export default function UploadForm() {
  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      const res = await axios.postForm("/api/upload", {
        file,
      });
      console.log(res.data);
    }
  }
  return (
    <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
      <UploadIcon />
      <span>Choose file</span>
      <input onChange={upload} type="file" className="hidden" />
    </label>
  );
}
