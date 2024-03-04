import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function StoreCard() {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [shopProfile, setShopProfile] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/store/shop/${currentUser._id}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setShopProfile(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  return (
    <div className="p-3 max-w-lg mx-auto">
      {loading ? (
        <div className="flex min-h-screen items-center justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <h1 className="header-text text-3xl my-7 text-center">My Shop</h1>
          <div className="flex flex-col gap-4">
            <p className="capitalize font-bold">
              Shop&apos;s Name: <span className="lowercase font-normal italic">{shopProfile?.shopName}</span>
            </p>
            <p className="capitalize font-bold">
              Owner&apos;s Name:{' '}
              <span className="lowercase font-normal italic">{shopProfile?.ownerName}</span>
            </p>
            <p className="capitalize font-bold">
              Username: <span className="lowercase font-normal italic">{shopProfile?.username}</span>
            </p>
            <p className="capitalize font-bold">
              Address:{' '}
              <span className="lowercase font-normal italic">
                {shopProfile?.shopAddress.shopStreet}, {shopProfile?.shopAddress.shopBarangay},{' '}
                {shopProfile?.shopAddress.shopCity}, {shopProfile?.shopAddress.shopProvince}
              </span>
            </p>
            <p className="capitalize font-bold flex flex-row gap-1 items-center">
              Shop Type:
              {shopProfile?.shopType.map((type) => (
                <span
                  key={type}
                  className="capitalize italic font-normal bg-blue-500 px-2 rounded-lg text-white cursor-pointer"
                >
                  {type}
                </span>
              ))}
            </p>
            <p className="capitalize font-bold flex flex-row gap-1 items-center">
              Gadget Lists:
              {shopProfile?.gadgetList.map((list) => (
                <span
                  key={list}
                  className="capitalize italic font-normal bg-blue-700 px-2 rounded-lg text-white cursor-pointer"
                >
                  {list}
                </span>
              ))}
            </p>
            <p className="capitalize font-bold">
              Permit No.: <span className="lowercase font-normal italic">{shopProfile?.permitNo}</span>
            </p>
            <p className="capitalize font-bold">
              Status:{' '}
              <span className="capitalize font-normal italic">
                {shopProfile && shopProfile.isApproved ? (
                  <span className="text-green-600">Approved</span>
                ) : (
                  <span className="text-red-600">Pending</span>
                )}
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
