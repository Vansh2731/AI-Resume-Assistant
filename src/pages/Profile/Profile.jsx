function Interview() {

  const questions = [
    "Tell me about yourself.",
    "What are your strengths?",
    "Explain React.",
    "Explain SQL Joins.",
    "Why should we hire you?",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Interview Practice
      </h1>

      <div className="max-w-4xl mx-auto space-y-5">

        {questions.map((question, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="font-bold text-lg">
              Question {index + 1}
            </h2>

            <p className="mt-3">
              {question}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Interview;