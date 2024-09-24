import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-orange-100 to-blue-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Profile Content */}
      <div className="flex flex-col w-full items-center justify-center ">
        {/* Profile Card */}
        <div className="bg-white  rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3">
          {/* Banner Section */}
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-t-lg"></div>

            {/* Profile Picture */}
            <div className="absolute -bottom-10 left-8">
              <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
          </div>

          {/* User Information Section */}
          <div className="p-12 pt-16">
            <div className="flex justify-between items-center">
              {/* User Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Rahul Bhandari
                </h1>
                <p className="text-gray-500">Joined on June 1, 2023</p>
              </div>

              {/* Stores Info */}
              <div>
                <span className="text-gray-600 text-sm font-medium">
                  STORES
                </span>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
                    Program Management
                  </span>
                  <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
                    People Management
                  </span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8">
              <h2 className="font-bold text-gray-700">About</h2>
              <p className="text-gray-600 mt-2">
                Creating enterprise-oriented ,scalable,data-driven applications
                . 👨‍💻
              </p>
            </div>

            {/* Social URLs Section */}
            <div className="mt-8">
              <h2 className="font-bold text-gray-700">Social URLs</h2>
              <div className="flex space-x-4 mt-4">
                {/* Facebook Icon */}
                <a href="#" className="text-blue-600" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22 12a10 10 0 1 0-11.45 9.87v-6.99h-2.8v-2.88h2.8V9.88c0-2.76 1.63-4.27 4.13-4.27 1.2 0 2.47.22 2.47.22v2.72h-1.39c-1.37 0-1.8.85-1.8 1.73v2.06h3.06l-.49 2.88h-2.57v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

                {/* Twitter Icon */}
                <a href="#" className="text-blue-400" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.47.68a4.28 4.28 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.73 1.04 4.27 4.27 0 0 0-7.39 2.92c0 .33.04.64.1.94a12.11 12.11 0 0 1-8.78-4.46 4.27 4.27 0 0 0 1.32 5.7 4.23 4.23 0 0 1-1.94-.54v.06a4.27 4.27 0 0 0 3.42 4.18 4.28 4.28 0 0 1-1.92.07 4.27 4.27 0 0 0 3.99 2.97 8.56 8.56 0 0 1-5.3 1.83 8.68 8.68 0 0 1-1.02-.06A12.08 12.08 0 0 0 9.3 21c7.85 0 12.15-6.51 12.15-12.15 0-.19 0-.38-.01-.57A8.69 8.69 0 0 0 22.46 6z" />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a href="#" className="text-blue-800" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22 22h-4.24v-6.54c0-1.56-.03-3.57-2.17-3.57-2.18 0-2.52 1.7-2.52 3.45V22H8.82V8.9h4.07v1.77h.06c.57-1.08 1.95-2.23 4.02-2.23 4.3 0 5.1 2.83 5.1 6.51V22zM5.36 7.13A2.4 2.4 0 1 1 5.37 2a2.4 2.4 0 0 1-.01 5.14zM3.16 22h4.24V8.9H3.16V22z" />
                  </svg>
                </a>

                {/* GitHub Icon */}
                <a href="#" className="text-gray-700" aria-label="GitHub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .08 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.4.1 2.64.64.7 1.03 1.61 1.03 2.7 0 3.85-2.35 4.7-4.59 4.95.36.31.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>

                {/* Personal Website Icon */}
                <a href="#" className="text-gray-600" aria-label="Website">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 0 1 0-16 8 8 0 0 1 0 16zm3.75-12H8.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
