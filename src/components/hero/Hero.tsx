import { Link } from "react-router-dom";
import Button from "../../utils/Button";

export default function Hero() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className=" flex items-center  ">
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="flex justify-center items-center flex-col container mx-auto text-center">
          <h1
            className="text-5xl font-extrabold mb-6 md:text-6xl text-white "
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Find trusted experts in your area
          </h1>
          <p
            className="text-xl font-thin mb-12 text-white"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Home improvement projects.
          </p>
          <Button
            className="btn-primary"
            type={"button"}
            text={<Link to="/formUser">Book Local Experts</Link>}
            handleClick={handleClick}
          />
        </div>
      </section>
    </div>
  );
}
