import "../../styles/activities.css";

const OsResearch = ({ close }) => {
  return (
    <div className="card-details relative max-h-screen overflow-y-auto">
      <button
        className="close-btn fixed right-4 top-4 bg-black text-white z-50 p-2"
        onClick={close}
      >
        &times;
      </button>
      <h2 className="font-bold text-4xl text-center mb-4">OS Research</h2>

      <img
        src="/images/extra/OS_Image.png"
        alt="OS Research Image"
        className="object-contain w-full"
        loading="lazy"
      />
    </div>
  );
};

export default OsResearch;
