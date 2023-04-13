const SideBar = ({
  backgroundColor = "black",
}: {
  backgroundColor?: string;
}) => {
  return (
    <div
      style={{ backgroundColor, color: "white", width: 250, height: "100vh" }}
    >
      Sidebar
    </div>
  );
};
export default SideBar;
