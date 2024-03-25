import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import brgyList from '../hooks/brgy';
import gadgets from '../hooks/gadgets';

export default function Search() {
  const { currentUser } = useSelector((state) => state.user);
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [storeLoading, setStoreLoading] = useState(false);
  const [store, setStore] = useState();
  const [searchError, setSearchError] = useState(false);
  const [searchTerm, setSearchTerm] = useState({
    type: urlParams.get('type') || 'all',
    loc: urlParams.get('loc') || 'all',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    urlParams.set('type', searchTerm.type);
    urlParams.set('loc', searchTerm.loc);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleChange = (e) => {
    setSearchTerm({
      ...searchTerm,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchListing = async () => {
      setStoreLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/store/active?${searchQuery}`);
      const data = await res.json();
      if (data.error === true) {
        setStore('');
        setSearchError(true);
        setStoreLoading(false);
        return;
      }
      // if (data.length > 9) {
      //   setShowMore(true);
      // } else {
      //   setShowMore(false);
      // }
      setStore(data);
      setSearchError(false);
      setStoreLoading(false);
    };

    fetchListing();
  }, [location.search]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 w-96 border-b-2 md:border-r-2 md:min-h-screen mx-auto md:mx-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 center">
          <div className="flex items-center gap-2"></div>

          <label className="input input-bordered w-full max-w-xs flex items-center gap-2 p-5 bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>

            <select
              className="grow bg-slate-100"
              name="type"
              id="type"
              defaultValue={(searchTerm.type === 'all' && 'DEFAULT') || searchTerm.type}
              onChange={handleChange}
            >
              <option value="DEFAULT" disabled>
                What can we fix for you?
              </option>
              {gadgets?.map((gadgets) => (
                <option key={gadgets.value} value={gadgets.value}>
                  {gadgets.label}
                </option>
              ))}
            </select>
          </label>
          <label className="input input-bordered w-full max-w-xs flex items-center gap-2 p-5 bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <select
              className="grow bg-slate-100"
              name="loc"
              id="loc"
              defaultValue={(searchTerm.loc === 'all' && 'DEFAULT') || searchTerm.loc}
              onChange={handleChange}
            >
              <option value="DEFAULT" disabled>
                Set your location
              </option>
              {brgyList?.map((brgy) => (
                <option key={brgy.value} value={brgy.value}>
                  {brgy.name}
                </option>
              ))}
            </select>
          </label>
          <button className="primary-btn text-white p-3 rounded-lg uppercase hover:bg-slate-700">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold border-b-2 p-3 text-slate-700 mt-5">Search Results:</h1>
        <div className="flex-1 p-7 flex-wrap">
          {searchError && <p className="text-2xl text-center text-slate-700">No Listings found!</p>}
          {/* <img
            className="w-2/4 object-contain mx-auto"
            src="https://firebasestorage.googleapis.com/v0/b/jp-estate.appspot.com/o/contents%2Floading.gif?alt=media&token=7af3641c-7738-4fca-a314-6346f5fc0163&_gl=1*10xzelj*_ga*MTM1Nzk3ODk0NC4xNjk3MjQ3ODM3*_ga_CW55HF8NVT*MTY5NzM2MDY5Ny4xMC4xLjE2OTczNjA3MjAuMzcuMC4w"
            alt="loading-image"
          /> */}
          {storeLoading && (
            <p className="text-2xl py-10">
              <span className="loading loading-dots loading-lg"></span>
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {store &&
              store.map((storeInfo) => (
                <div
                  key={storeInfo?._id}
                  className="flex flex-col gap-2 border-[1px] p-7 border-slate-300 rounded-lg"
                >
                  <h3 className="text-xl font-bold">{storeInfo?.shopName}</h3>
                  <p className="capitalize text-sm italic">{`${storeInfo.shopAddress.shopStreet}, ${storeInfo.shopAddress.shopBarangay}, ${storeInfo.shopAddress.shopCity}, ${storeInfo.shopAddress.shopProvince}`}</p>
                  <p className="capitalize text-sm font-bold">{storeInfo.ownerName}</p>
                  <p className="text-sm">
                    <strong>Services Offered:</strong>{' '}
                    <span className="capitalize italic bg-blue-800 text-white px-2 rounded-lg">
                      {' '}
                      {storeInfo.shopType.join(', ')}
                    </span>
                  </p>
                  <p className="text-sm">
                    <strong>Gadget List:</strong>{' '}
                    <span className="capitalize italic bg-blue-800 text-white px-2 rounded-lg">
                      {' '}
                      {storeInfo.gadgetList.join(', ')}
                    </span>
                  </p>
                  {currentUser && <button className="primary-btn"> Set Appointment </button>}
                </div>
              ))}
            <button className="text-green-500 hover:underline p-7 text-center w-full">Show more...</button>
          </div>
        </div>
      </div>
    </div>
  );
}
