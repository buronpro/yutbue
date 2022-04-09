import { useParams } from "react-router-dom";

const Error = () => {
  const param = useParams();
  return <div className="error">{param["*"] + " page is coming"}</div>;
};

export default Error;
