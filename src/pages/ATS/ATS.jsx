import { useState } from "react";

function ATS() {
  const [score] = useState(Math.floor(Math.random() * 21) + 75);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-xl text-center">

        <h1 className="text-4xl font-bold text-blue-700">
          ATS Report
        </h1>

        <p className="text-7xl font-bold text-green-600 mt-8">
          {score}%
        </p>

        <div className="w-full h-5 bg-gray-300 rounded-full mt-8">

          <div
            className="bg-green-600 h-5 rounded-full"
            style={{
              width: `${score}%`,
            }}
          ></div>

        </div>

        <div className="mt-8 text-left">

          <h2 className="font-bold text-xl">
            AI Suggestions
          </h2>

          <ul className="list-disc ml-6 mt-4 space-y-2">

            <li>Add more technical skills.</li>

            <li>Improve professional summary.</li>

            <li>Add measurable achievements.</li>

            <li>Include certifications.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default ATS;