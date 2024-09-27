import { useTheme } from "next-themes";
import Link from "next/link";

const Page = () => {
  // const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-[#030014] p-4">
      <h1 className="text-3xl lg:text-5xl md:text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Oops...!
      </h1>
      <p className="text-xl text-center dark:text-white text-gray-800 mb-8">
        My resume is currently being updated. Please check back later!
      </p>
      <Link href="/">
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-indigo-600 px-8 py-3 text-white transition duration-300 ease-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900">
          <span className="mr-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
          <span className="relative">Go back</span>
        </button>
      </Link>
    </div>
  );
};

export default Page;
