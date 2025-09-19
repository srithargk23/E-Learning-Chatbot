export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-gray-300">
      <h1 className="text-2xl mb-4">What are you working on?</h1>
      <input
        placeholder="Ask anything..."
        className="p-3 w-96 bg-gray-800 rounded-lg border border-gray-600 outline-none"
      />
    </div>
  );
}
