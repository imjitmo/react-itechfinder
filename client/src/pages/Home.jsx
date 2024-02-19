export default function Home() {
  return (
    <div className="max-w-full mx-auto">
      <img
        className="object-cover w-full h-auto"
        src="https://firebasestorage.googleapis.com/v0/b/itechfinder-4502f.appspot.com/o/page_photo%2Fbanner-top.png?alt=media&token=62166926-9269-4a87-af69-d1eb09bbe9b0"
      />
      <div className="p-3 mx-auto max-w-max">
        <div className="flex flex-col gap-4 my-5">
          <h1 className="font-black text-4xl capitalize text-blue-800 text-center">Start a repair</h1>
          <form action="" className="flex flex-col lg:flex-row gap-4">
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

              <select className="grow bg-slate-100" name="" id="" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>
                  What can we fix for you?
                </option>
                <option value="android">Android Phone</option>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <input type="text" className="grow bg-slate-100" placeholder="Set your location" />
            </label>
            <button className="btn btn-square bg-blue-800 text-white hover:bg-blue-600 w-full lg:w-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-full mx-auto my-5">
        <img
          className="object-cover w-full h-auto"
          src="https://firebasestorage.googleapis.com/v0/b/itechfinder-4502f.appspot.com/o/page_photo%2Fimg-2.png?alt=media&token=7086b691-b3fb-4f0f-85ef-51b4f5979842"
          alt=""
        />
      </div>
    </div>
  );
}
