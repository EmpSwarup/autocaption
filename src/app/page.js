import SparklesIcon from "@/components/SparklesIcon";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
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
