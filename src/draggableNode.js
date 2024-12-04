// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px", // Adjusted for better alignment with circular styles
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "10%", // Makes the background circular
        backgroundColor: "#fff", // White background
        border: "1px solid #e0e0e0", // Border with your specified color
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional shadow for a polished look
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
      }}
      draggable
    >
      <span style={{ color: "#838181", fontWeight: "normal", fontSize: "13px" }}>{label}</span>
    </div>
  );
};
