function UploadResume() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Upload Resume
        </h1>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full mt-8 border p-3 rounded-lg"
        />

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Upload
        </button>

      </div>
    </div>
  );
}

export default UploadResume;