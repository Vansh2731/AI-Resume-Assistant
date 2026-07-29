import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartLine,
  FaFileAlt,
  FaUserGraduate,
} from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <nav className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-3xl font-bold">
            AI Resume Assistant
          </h1>

          <div className="space-x-4">

            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-white hover:bg-white hover:text-blue-700 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Register
            </Link>

          </div>

        </div>
      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-extrabold text-gray-800">
          Build a Resume that
          <span className="text-blue-600"> Gets Hired</span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your resume, receive an ATS score, practice interviews,
          and improve your chances of getting your dream job using AI.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/register"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg hover:bg-blue-600 hover:text-white transition"
          >
            Create Account
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <FaFileAlt
              className="mx-auto text-blue-600"
              size={45}
            />

            <h3 className="text-xl font-bold mt-5">
              Resume Upload
            </h3>

            <p className="text-gray-600 mt-3">
              Upload resumes in PDF or DOCX format.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <FaChartLine
              className="mx-auto text-green-600"
              size={45}
            />

            <h3 className="text-xl font-bold mt-5">
              ATS Analysis
            </h3>

            <p className="text-gray-600 mt-3">
              Get an AI-powered ATS compatibility score.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <FaUserGraduate
              className="mx-auto text-purple-600"
              size={45}
            />

            <h3 className="text-xl font-bold mt-5">
              Interview Practice
            </h3>

            <p className="text-gray-600 mt-3">
              Practice common interview questions.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <FaRobot
              className="mx-auto text-orange-500"
              size={45}
            />

            <h3 className="text-xl font-bold mt-5">
              AI Suggestions
            </h3>

            <p className="text-gray-600 mt-3">
              Receive personalized resume improvement tips.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-blue-700 text-white text-center py-6">
        © 2026 AI Resume & Interview Assistant | Major Project
      </footer>

    </div>
  );
}

export default Home;