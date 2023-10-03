import loading from "../assets/load.gif";
export default function Spinner() {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center" role="status">
        <img style={{ width: "290px" }} src={loading} alt="loading..." />
      </div>
    </div>
  );
}
