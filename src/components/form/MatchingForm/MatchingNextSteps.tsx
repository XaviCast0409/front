export default function MatchingNextSteps() {
  return (
    <>
      <section className="p-6 dark:text-gray-800 w-full">
        <h2 className="text-5xl font-bold text-center dark:text-gray-900">
          Next Steps: Phone Call
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-2">
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full  dark:text-gray-50 text-center btn-primary">
              1
            </div>
            <p className="text-2xl font-semibold">
              <b>Their bathroom</b> Neam will need a call to confirm this slot.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex items-center  text-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full btn-primary dark:text-gray-50">
              2
            </div>
            <p className="text-2xl font-semibold">
              <b>Any questions</b> you have will be answered on that phone call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
