import React from "react";
import { DiDatabase } from "react-icons/di";

const Dashboard = () => {
  return (
    <section className="p-4">
      <p className="font-bold mt-4 mb-4 text-lg tracking-wide">
        Get started working on your projects!
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-100  p-2">
          <div>
            <DiDatabase size={50} />
          </div>

          <div>
            <h3>Add Project</h3>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full">
              Add
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-2">
          <div>
            <DiDatabase size={50} />
          </div>

          <div>
            <h3>Add Issue</h3>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full">
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="my-12">
        <h3 className="my-2 font-bold text-lg tracking-wide">Projects</h3>

        <div className="flex flex-col gap-5">
          <div className="flex align-middle bg-gray-300 py-3 px-1">
            <DiDatabase size={30} />
            <h6>Project Name</h6>
          </div>

          <div className="flex align-middle bg-gray-300 py-3 px-1">
            <DiDatabase size={30} />
            <h6>Project Name</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
