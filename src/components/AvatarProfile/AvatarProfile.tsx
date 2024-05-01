export default function AvatarProfile () {
  return (
    <div className="text-center">
      <img
          src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
          className="mx-auto mb-4 w-32 rounded-lg"
          alt="Avatar" />
      <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
      <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
  </div>
  );
}