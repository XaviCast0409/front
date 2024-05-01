export function HowWeCanHelp() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="">
            <img
              alt="img"
              src="https://images.pexels.com/photos/7710011/pexels-photo-7710011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="inset-0 h-full w-full object-cover rounded-lg shadow-2xl block mx-auto"
            />
          </div>
          <div className="flex items-center">
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                How We Can Assist You
              </h2>
              <hr className="border-t-2 border-black my-4" />

              <p className="mt-4 text-gray-600">
                As homeowners ourselves, we understand the stress of finding the
                perfect assistance for your home projects. That's why we
                specialize in connecting you with local professionals who are
                tailored to meet your specific needs. Whether it's roofing,
                kitchen renovations, or any other project, we match you with
                skilled experts who comprehend the unique challenges of your
                undertaking. Count on us to connect you with contractors who
                share your passion for your home. Let's begin building your
                dream home together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
