import SparklesIcon from "@/components/SparklesIcon";
import UploadIcon from "@/components/UploadIcon";

export default function Home() {
  return (
    <>
      <div className="text-center mt-24 mb-8">
        <h1
          className="text-3xl"
          style={{ textShadow: "1px 1px 0 rgba(0,0,0,.2)" }}
        >
          Add epic captions to your videos
        </h1>
        <h2 className="text-white/75">
          Just upload your video and we will do the rest.
        </h2>
      </div>
      <div className="text-center">
        <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50">
          <UploadIcon />
          <span>Choose file</span>
        </button>
      </div>
      <div className="flex justify-around mt-12 items-center">
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
        <div>
          <SparklesIcon />
        </div>
        <div className="bg-gray-800/50 w-[240px] h-[480px] rounded-xl"></div>
      </div>
    </>
  );
}
