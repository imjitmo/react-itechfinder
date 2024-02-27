import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import gadgets from '../hooks/gadgets';
import storeType from '../hooks/storeType';

export default function StoreSetup() {
  const [showSetup, setShowSetup] = useState(false);
  const [isGadgets, setIsGadgets] = useState([]);
  const [isStore, setIsStore] = useState([]);
  const [isPermit, setIsPermit] = useState();
  const [ownerData, setOwnerData] = useState({});
  const animatedComponents = makeAnimated();

  const handleGadgetChange = (selectedGadgets) => {
    selectedGadgets.map((selectedValue) => setIsGadgets([...isGadgets, selectedValue.value]));
  };

  const handleStoreChange = (selectedStores) => {
    selectedStores.map((selectedValue) => setIsStore([...isStore, selectedValue.value]));
  };
  return (
    <div>
      <h1 className="header-text text-3xl text-center my-7">My Shop</h1>
      <div className="flex flex-col gap-4 my-5">
        {showSetup && (
          <form action="" className="flex flex-col gap-4">
            <section id="forShopName" className="flex flex-col gap-2">
              <span className="text-xs font-semibold italic pl-2">Shop&apos;s Name</span>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>

                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  className="grow"
                  placeholder="Shop's name"
                  required
                />
              </label>
            </section>
            <section id="forOwnerName" className="flex flex-col gap-2">
              <span className="text-xs font-semibold italic pl-2">Owner&apos;s Name</span>
              <label className="input input-bordered flex items-center gap-2">
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
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  className="grow"
                  placeholder="Owner's name"
                  required
                />
              </label>
            </section>
            <section id="forStoreType" className="flex flex-col gap-2">
              <span className="text-xs font-semibold italic pl-2">Store Type(Retail or Repair)</span>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isClearable={true}
                isMulti
                options={storeType}
                onChange={handleStoreChange}
                id="shopType"
                placeholder="Store Type"
                required
              />
            </section>
            <section id="forGadgetList" className="flex flex-col gap-2">
              <span className="text-xs font-semibold italic pl-2">Gadget Lists</span>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isClearable={true}
                isMulti
                options={gadgets}
                id="gadgetList"
                onChange={handleGadgetChange}
                placeholder="Select Gadgets"
                required
              />
            </section>
            <section id="forShopAddress" className="flex flex-col gap-2">
              <span className="text-xs font-semibold italic pl-2">Shop&apos;s Address</span>
              <div className="flex flex-row gap-2 items-center">
                <label className="input input-bordered flex items-center gap-2">
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
                  <input type="text" id="shopStreet" className="grow" placeholder="Street" required />
                </label>
                <label>
                  <select name="shopBarangay" id="" className="select select-bordered grow" required>
                    <option value="">Barangay</option>
                  </select>
                </label>
              </div>
            </section>
            <section id="forPermitNo" className="flex flex-col gap-2">
              <span className="text-xs font-semibold italic pl-2">DTI Permit #</span>
              <label className="input input-bordered flex items-center gap-2">
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
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>

                <input type="text" id="permitNo" className="grow" placeholder="DTI Permit #" required />
              </label>
            </section>
            <section id="forPermitDocs">
              <label className="flex flex-col gap-2">
                <span className="uppercase text-sm font-bold">Upload DTI Permit</span>
                <input type="file" id="permitPhoto" className="file-input file-input-primary grow" />
                {isPermit && <button className="green-btn">Upload</button>}
              </label>
              <span className="text-xs font-semibold italic">JPEG, JPG, PNG and PDF (Max: 4.00 MB)</span>
            </section>
            <section id="forButton">
              <div className="flex flex-col lg:flex-row gap-2">
                <span
                  className="google-btn w-full lg:w-32"
                  onClick={() => setShowSetup((prevState) => !prevState)}
                >
                  Cancel
                </span>
                <button className="primary-btn grow order-first lg:order-last lg:flex-auto">Setup</button>
              </div>
            </section>
          </form>
        )}
        <button
          className={`primary-btn ${showSetup && 'hidden'}`}
          onClick={() => setShowSetup((prevState) => !prevState)}
        >
          Setup Shop
        </button>
      </div>
    </div>
  );
}
