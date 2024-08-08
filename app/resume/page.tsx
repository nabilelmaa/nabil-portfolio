import React from "react";

const page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#030014] text-white">
      <h1 className="text-3xl lg:text-5xl md:text-5xl font-semibold mb-4">
        Oops...!
      </h1>
      <p className="text-xl text-center">
        My resume is currently being updated. Please check back later!
      </p>
    </div>
  );
};

export default page;
