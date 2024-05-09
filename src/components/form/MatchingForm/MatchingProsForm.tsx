//import MatchingFeatured from "./MatchingFeatured";
import MatchingDetail from "./MatchingDetail";
import MatchingNextSteps from "./MatchingNextSteps";

export default function MatchingProsForm() {
  return (
    <>
      <div className="w-full">
        {" "}
        {/* Agregado: clase w-full */}
        <h1 className="h1">HERE ARE YOUR MATCHING PROS</h1>
      </div>
      <div className="flex flex-col justify-center items-center lg:justify-center">
        {/* Primer componente 
        <div className="mb-8 lg:mr-4">
          <MatchingFeatured />
        </div>
         Segundo componente */}
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
        {/* Tercer componente */}
      </div>
    </>
  );
}
