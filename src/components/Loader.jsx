import { RotatingTriangles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <RotatingTriangles
        visible={true}
        height="200"
        width="200"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={["#fff", "#6441a5", "#2a0845"]}
      />
    </div>
  );
}
