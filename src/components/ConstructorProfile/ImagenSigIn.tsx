import Logos from "../../utils/Logos";

export const ImagenSigIn = () => {
  return (
    <div
      className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7937294/pexels-photo-7937294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide">
          Building Excellence
        </h1>
        <p className="text-3xl my-4">
          Crafting your spaces with precision and care, every step of the way.
        </p>
      </div>
      <Logos />
    </div>
  );
};
