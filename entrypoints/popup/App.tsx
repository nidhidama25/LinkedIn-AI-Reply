import "./App.css";

function App() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center p-8 gap-3 bg-white rounded-lg shadow-md">
        <img
          src="/wxt.svg"
          alt=""
          className="h-10 w-10 bg-black rounded-full shadow-sm"
        />
        <h1 className="text-xl font-bold text-gray-800">
          LinkedIn Message Assistant
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-md mx-auto px-6">
        <p className="text-base font-semibold text-gray-700 mb-2 text-center">
          Welcome to the LinkedIn Message Assistant
        </p>
        <p className="text-sm text-gray-600 text-center leading-relaxed">
          This extension helps you generate replies for your LinkedIn messages
          quickly. Write the prompt, and we will assist you in crafting a
          response.
        </p>
      </div>
    </>
  );
}

export default App;
