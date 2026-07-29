import {
  FaHome,
  FaFileUpload,
  FaRobot,
  FaUserGraduate,
  FaUser,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-72 bg-blue-700 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        AI Resume
      </h1>

      <div className="space-y-5">

        <button className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg w-full">
          <FaHome />
          Dashboard
        </button>

        <button className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg w-full">
          <FaFileUpload />
          Upload Resume
        </button>

        <button className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg w-full">
          <FaRobot />
          ATS Analysis
        </button>

        <button className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg w-full">
          <FaUserGraduate />
          Interview
        </button>

        <button className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg w-full">
          <FaUser />
          Profile
        </button>

      </div>

    </div>
  );
}