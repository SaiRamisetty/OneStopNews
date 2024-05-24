import Spinner from "react-bootstrap/Spinner";

function BasicExample() {
  return (
    <div className="d-flex justify-content-center my-3">
      <Spinner
        animation="border"
        role="status"
        style={{ color: "#0D6EFD" }}
      ></Spinner>
    </div>
  );
}

export default BasicExample;
