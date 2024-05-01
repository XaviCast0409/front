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
            "url('https://images.pexels.com/photos/4969995/pexels-photo-4969995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="flex justify-center items-center flex-col container mx-auto text-center">
          <h1
            className="text-5xl font-extrabold mb-6 md:text-6xl "
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Discover reliable professionals in your vicinity.
          </h1>
          <p
            className="text-xl font-thin mb-12"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Enhance your home with renovation projects.
          </p>
          <Button
            className="btn-primary"
            type={"button"}
            text={<Link to="/form">Hire Local Professionals</Link>}
            handleClick={handleClick}
          />
        </div>
      </section>
    </div>
  );
}
