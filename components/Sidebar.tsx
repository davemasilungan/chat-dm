import NewChat from "./NewChat";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* Select Chat Model */}</div>

          {/* Map through Chat Rows */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;