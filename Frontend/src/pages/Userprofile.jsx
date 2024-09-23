function Userprofile() {
  return (
    <div className="flex items-center justify-center w-36 h-full bg-blue-500 rounded-full text-white text-2xl font-bold select-none">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            src="https://giffiles.alphacoders.com/532/53236.gif"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export { Userprofile as UserProfile };
