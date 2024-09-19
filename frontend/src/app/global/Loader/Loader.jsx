import "./Loader.css"; // Assuming you'll define styles here
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spinner
        animation="grow"
        variant="info"
        style={{ width: "5rem", height: "5rem" }}
      />
    </div>
  );
};

export default Loader;
