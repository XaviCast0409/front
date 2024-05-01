import { Link } from "react-router-dom";
import BackButtonArrow from "../../../utils/BackButtonArrow";

export default function BestDescribeBathroom() {
  return (
    <div>
      <h2 className={"h1".replace(/\s+/g, " ").trim()}>
        Which of these best <br /> describes your requirements?
      </h2>
      <form  className="flex  justify-center items-center overflow-hidden text-left  rounded group  w-full h-1/2 p-8">
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg max-w-xs shadow-lg hover:bg-blue-600  h-auto  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            {/* Check for NullPointerException: */}
            {(<img className="relative w-40" src="icono_url_3" alt="" />) ??
              null}
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-between text-align ">
              {/* Check for NullPointerException: */}
              {(<Link to="/fullnameform">
                <h5 className="h5_card_bloque">Replace Bath or Shower</h5>
              </Link>) ?? null}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-pink-500 rounded-lg max-w-xs shadow-lg hover:bg-pink-600 h-auto  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            {/* Check for NullPointerException: */}
            {(<img className="relative w-40" src="icono_url_3" alt="" />) ??
              null}
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-between text-align items-center ">
              {/* Check for NullPointerException: */}
              {(<Link to="/fullnameform">
                <h5 className="h5_card_bloque">Renovate Whole Bathroom</h5>
              </Link>) ?? null}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg hover:bg-green-600 h-auto  transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 ">
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            {/* Check for NullPointerException: */}
            {(<img className="relative w-40" src="icono_url_3" alt="" />) ??
              null}
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <div className="flex justify-between text-align ">
              {/* Check for NullPointerException: */}
              {(<Link to="/fullnameform">
                <h5 className="h5_card_bloque">Install Walk-In Bathtub</h5>
              </Link>) ?? null}
            </div>
          </div>
        </div>

        <BackButtonArrow />
      </form>
    </div>
  );
}
