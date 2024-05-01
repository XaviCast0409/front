export default function WhatToExpect() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <div className="order-2 md:order-1">
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                What you can anticipate
              </h2>
              <hr className="border-t-2 border-black my-4" />
              <p className="mt-4 text-gray-600">
                We believe that when it comes to your home, everyone should find
                what's best for them and their families. Helping you discover
                the best prices is our way of contributing to that goal.
              </p>
              <p className="mt-4 text-gray-600">
                We've curated various pricing guides, informative articles, and
                financing options on our "Resources" page to empower you to make
                the best decisions for you and your family.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="h-64 sm:h-80 lg:h-full">
              <img
                alt="img"
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="inset-0 h-full w-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
