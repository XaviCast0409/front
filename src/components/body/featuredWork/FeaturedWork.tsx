import Button from "../../../utils/Button";

export default function FeaturedWork() {
  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado");
  };
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Highlighted Projects
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Explore our handpicked selection of outstanding projects, showcasing
            the best in web design, app development, and more. Immerse yourself
            in a diverse range of creative endeavors that embody our commitment
            to excellence and innovation.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
          ].map((src, index) => (
            <li
              key={index}
              className={
                index === 2
                  ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                  : ""
              }
            >
              <a href="#" className="group relative block">
                <img
                  src={src}
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg shadow-2xl"
                />

                <div className="inset-0 flex flex-col items-start justify-end p-6">
                  <Button
                    className="btn-primary"
                    type="button"
                    text="DETAIL"
                    handleClick={handleSubmit}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
