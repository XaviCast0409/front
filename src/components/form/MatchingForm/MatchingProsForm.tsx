import MatchingFeatured from "./MatchingFeatured";
import MatchingDetail from "./MatchingDetail";
import MatchingNextSteps from "./MatchingNextSteps";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../../utils/Button";

export default function MatchingProsForm() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="w-full"> {/* Agregado: clase w-full */}</div>

      <div className="flex flex-col justify-center items-center lg:justify-center">
        <h1 className="h1 mt-20">HERE ARE YOUR MATCHING PROS</h1>
        {/* Primer componente */}
        <div className="mb-8 lg:mr-4">
          <MatchingFeatured />
        </div>

        <div className="mb-8 mx-auto lg:mx-0  p-4">
          {" "}
          {/* Ajustes para MatchingDetail */}
          <MatchingDetail />
        </div>
        <div className="mb-8 mx-auto lg:mx-0  lg:max-w-3xl p-4">
          {" "}
          {/* Ajustes para MatchingNextSteps */}
          <MatchingNextSteps />
        </div>

        <div className="flex justify-center items-center my-10">
          <Link to="/">
            <Button
              className="btn-primary m-"
              type="button"
              text="Back To Home"
              handleClick={handleSubmit}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
