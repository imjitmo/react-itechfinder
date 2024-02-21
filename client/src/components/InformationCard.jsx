export default function InformationCard() {
  return (
    <div>
      <h1 className="header-text text-3xl text-center">Additional Information</h1>
      <div className="flex flex-col gap-4 my-4">
        <p className="font-bold">
          Name: <span className="font-normal italic text-sm">(empty)</span>
        </p>
        <p className="font-bold">
          Gender: <span className="font-normal italic text-sm">(empty)</span>
        </p>
        <p className="font-bold">
          Contact: <span className="font-normal italic text-sm">(empty)</span>
        </p>
        <p className="font-bold">
          Address: <span className="font-normal italic text-sm">(empty)</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="primary-btn uppercase">Setup</button>
      </div>
    </div>
  );
}
