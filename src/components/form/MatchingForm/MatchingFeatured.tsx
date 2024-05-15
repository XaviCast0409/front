import { useUser } from "../../../hooks/hookUser/useUser";

export default function MatchingFeatured() {
  const { user, tradeUser, classUser, companyUser } = useUser();

console.log(user , tradeUser , classUser , companyUser)
return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h3 className="text-5xl font-bold text-center dark:text-gray-900">
            Your Matching Pros
          </h3>
        </div>
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl h-1/2">
          <div className="p-5 flex flex-col justify-center items-center">
            {user.map((userItem) => (
              <div key={userItem.id}>
                <h3 className="primary_color font-semibold">{userItem.name}</h3>
                <p className="text-sm leading-5 text-gray-900">
                  {userItem.email}
                </p>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
}


