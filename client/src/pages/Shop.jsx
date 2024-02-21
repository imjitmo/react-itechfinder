import { useSelector } from 'react-redux';

export default function Shop() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="header-text text-3xl text-center my-7">My Shop</h1>
      <div className="flex flex-col gap-4 my-5">
        {currentUser.isOwner ? (
          ''
        ) : (
          <button className="btn bg-blue-800 text-white hover:bg-blue-600">Set Up Shop</button>
        )}
      </div>
    </div>
  );
}
