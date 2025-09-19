interface SidebarProps {
  activeChat: number | null;
  setActiveChat: (id: number | null) => void;
}

export default function Sidebar({ activeChat, setActiveChat }: SidebarProps) {
  const chats = [
    { id: 1, name: "Amal" },
    { id: 2, name: "Str" },
  ];

  return (
    <div className="w-64 bg-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <button
          onClick={() => setActiveChat(null)}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg"
        >
          + New Chat
        </button>
      </div>

      {/* Chat history */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`px-4 py-3 cursor-pointer ${
              activeChat === chat.id
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveChat(chat.id)}
          >
            {chat.name}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-gray-400 text-sm">⚙️ Settings</div>
      </div>
    </div>
  );
}
