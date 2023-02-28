import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div className="border border-gray-700 chatRow">
      <PlusIcon className="h-4 w-4" />
      <p className="mr-8">New Chat</p>
    </div>
  );
};

export default NewChat;
