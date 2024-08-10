"use client";

import { useRouter, usePathname } from "next/navigation";

function Resume() {
  const router = useRouter();
  const pathname = usePathname();

  const isResumePag = pathname === "/resume";

  const handleDownloadClick = () => {
    router.push("/resume");
  };

  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Resume
      </h1>
      <div>
        <button
          className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 bg-white"
          onClick={handleDownloadClick}
        >
          <span className="absolute -start-full transition-all group-hover:start-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:ms-4">
            Download
          </span>
        </button>
      </div>
    </section>
  );
}

export default Resume;
