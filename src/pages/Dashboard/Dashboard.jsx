import { useState } from "react";
import {
  FaFileUpload,
  FaChartLine,
  FaUserGraduate,
  FaFileAlt,
  FaBrain,
} from "react-icons/fa";

export default function Dashboard() {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [atsScore, setAtsScore] = useState(null);

  const handleUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const analyzeResume = () => {
    if (!resume) {
      alert("Please upload a resume first.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const score = Math.floor(Math.random() * 21) + 75;
      setAtsScore(score);
      setLoading(false);
    }, 2500);
  };

  const stats = [
    {
      title: "ATS Score",
      value: atsScore ? `${atsScore}%` : "--",
      icon: <FaChartLine size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Interview Score",
      value: "81%",
      icon: <FaUserGraduate size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Resume Strength",
      value: "92%",
      icon: <FaFileAlt size={28} />,
      color: "bg-purple-600",
    },
    {
      title: "AI Suggestions",
      value: "12",
      icon: <FaBrain size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-blue-700 text-white p-5 shadow-lg flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          AI Resume & Interview Assistant
        </h1>

        <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold">
          Logout
        </button>

      </div>

      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-4xl font-bold mb-8">
          Dashboard
        </h2>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <div
                className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-gray-500">
                {item.title}
              </h3>

              <p className="text-4xl font-bold mt-2">
                {item.value}
              </p>

            </div>
          ))}

        </div>

        {/* Upload + Suggestions */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Upload Resume */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Upload Resume
            </h3>

            <div className="border-2 border-dashed border-blue-400 rounded-xl p-8 flex flex-col items-center">

              <FaFileUpload
                size={60}
                className="text-blue-600 mb-5"
              />

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleUpload}
                className="mb-5"
              />

              {resume && (
                <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center mb-5 w-full">
                  <strong>Selected File</strong>
                  <br />
                  {resume.name}
                </div>
              )}

              <button
                onClick={analyzeResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
              >
                Analyze Resume
              </button>

              {loading && (
                <div className="mt-6 text-blue-600 font-semibold animate-pulse">
                  🤖 AI is analyzing your resume...
                </div>
              )}

              {atsScore && (
                <div className="mt-8 w-full bg-slate-100 rounded-xl p-5">

                  <h3 className="text-xl font-bold">
                    ATS Analysis Result
                  </h3>

                  <p className="text-5xl font-bold text-green-600 mt-4">
                    {atsScore}%
                  </p>

                  <div className="w-full bg-gray-300 h-4 rounded-full mt-5">

                    <div
                      className="bg-green-600 h-4 rounded-full transition-all duration-1000"
                      style={{
                        width: `${atsScore}%`,
                      }}
                    ></div>

                  </div>

                  <p className="mt-4 text-gray-600">
                    Resume is suitable for most software engineering positions.
                  </p>

                </div>
              )}

            </div>

          </div>

          {/* AI Suggestions */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              AI Suggestions
            </h3>

            <div className="space-y-4">

              <div className="bg-green-100 p-4 rounded-xl">
                ✔ Add more technical skills.
              </div>

              <div className="bg-yellow-100 p-4 rounded-xl">
                ✔ Improve your professional summary.
              </div>

              <div className="bg-blue-100 p-4 rounded-xl">
                ✔ Include measurable achievements.
              </div>

              <div className="bg-red-100 p-4 rounded-xl">
                ✔ Missing SQL keyword.
              </div>

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

          <h3 className="text-2xl font-bold mb-6">
            Recent Activity
          </h3>

          <ul className="space-y-4">

            <li>📄 Resume uploaded successfully</li>

            <li>🤖 ATS score generated using AI analysis</li>

            <li>📊 Resume strength evaluated</li>

            <li>🎤 Interview preparation module available</li>

          </ul>

        </div>

      </div>

    </div>
  );
}