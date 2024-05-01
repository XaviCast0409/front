export default function MatchingNextSteps() {
  return (
    <>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800 w-full">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center dark:text-gray-900">
            Next Steps
          </h2>
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-blue-400">
            Phone Call
          </span>
          <div className="grid gap-6 my-16 lg:grid-cols-2">
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-blue-400 dark:text-gray-50">
                1
              </div>
              <p className="text-2xl font-semibold">
                <b>Their bathroom</b>Neam will need a call to confirm this slot.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
                2
              </div>
              <p className="text-2xl font-semibold">
                <b>Any questions</b>you have will be answered on that phone
                call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
