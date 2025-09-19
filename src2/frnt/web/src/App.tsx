import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import Home from "./Home";

export default function App() {
  const [activeChat, setActiveChat] = useState<number | null>(null);

  return (
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />

      {/* Right Panel */}
      <div className="flex-1">
        {activeChat === null ? (
          <Home /> // Show welcome screen
        ) : (
          <ChatWindow chatId={activeChat} /> // Show chat when selected
        )}
      </div>
    </div>
  );
}
