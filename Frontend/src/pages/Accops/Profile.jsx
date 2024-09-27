import Sidebar from "../../components/Sidebar";
import twinImage from "../../assets/twinImage.jpg";

const Profile = () => {
  return (
    <div className="flex h-screen bg-[#f3f4f6] mb-3">
      {/* Sidebar */}

      <Sidebar />

      {/* Profile Content */}
      <div className="flex flex-col w-full items-center justify-center mt-6">
        {/* Profile Card */}
        <div className="rounded-lg w-full md:w-3/4 lg:w-2/3">
          {/* Banner Section */}
          <div className="relative h-44">
            <div className="h-full flex justify-center align-middle ">
              <img
                className=" min-h-full min-w-full border-4 border-white object-cover"
                style={{
                  objectFit: "cover",
                }}
                src={twinImage}
                alt="coverImage"
              />
            </div>

            {/* Profile Picture */}
            <div className="absolute -bottom-10 left-8">
              <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                src="/images/rb_image.jpg"
                alt="Profile"
              />
            </div>
          </div>

          {/* User Information Section */}
          <div className="p-12 pt-16 bg-slate-200 mb-[30px]">
            <div className="flex justify-between">
              {/* User Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Rahul Bhandari
                </h1>
                <p className="text-gray-500">Joined on June 1, 2023</p>
              </div>

              {/* Stores Info */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "5px",
                }}
              >
                <span className="text-gray-600 text-sm font-bold">ROLES</span>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-300 px-3 py-1  text-sm rounded-full min-w-max">
                    Program Manager
                  </span>
                  <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                    People Manager
                  </span>
                  <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                    Asset Manager
                  </span>
                </div>
                <div className="flex space-x-2 mt-2  ">
                  <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                    Recruiter
                  </span>
                  <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                    Team Lead
                  </span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-8">
              <h2 className="font-bold text-gray-700">About</h2>
              <p className="text-gray-600 mt-2">
                I have led UAT projects and recruitment for Jio's GET program,
                currently managing a team of 90 professionals to ensure quality
                across key products. I am also dedicated to social causes,
                reflecting my commitment to positive societal impact.
              </p>
            </div>

            {/* Social URLs Section */}
            <div className="mt-8">
              <h2 className="font-bold text-gray-700">Social URLs</h2>
              <div className="flex space-x-4 mt-4">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/rb05/"
                  className="text-blue-800"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22 22h-4.24v-6.54c0-1.56-.03-3.57-2.17-3.57-2.18 0-2.52 1.7-2.52 3.45V22H8.82V8.9h4.07v1.77h.06c.57-1.08 1.95-2.23 4.02-2.23 4.3 0 5.1 2.83 5.1 6.51V22zM5.36 7.13A2.4 2.4 0 1 1 5.37 2a2.4 2.4 0 0 1-.01 5.14zM3.16 22h4.24V8.9H3.16V22z" />
                  </svg>
                </a>

                {/* Instagram Icon  */}
                <a
                  href="https://www.instagram.com/_bhandariji_/?hl=en"
                  className="text-gray-700"
                  aria-label="Instagram"
                >
                  <svg
                    width="1.6rem"
                    height="1.6rem"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="20" fill="#C13584" />
                    <path
                      d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                      fill="white"
                    />
                    <path
                      d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                      fill="white"
                    />
                    <path
                      d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* Twitter Icon
                <a href="#" className="text-blue-400" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.47.68a4.28 4.28 0 0 0 1.88-2.36 8.6 8.6 0 0 1-2.73 1.04 4.27 4.27 0 0 0-7.39 2.92c0 .33.04.64.1.94a12.11 12.11 0 0 1-8.78-4.46 4.27 4.27 0 0 0 1.32 5.7 4.23 4.23 0 0 1-1.94-.54v.06a4.27 4.27 0 0 0 3.42 4.18 4.28 4.28 0 0 1-1.92.07 4.27 4.27 0 0 0 3.99 2.97 8.56 8.56 0 0 1-5.3 1.83 8.68 8.68 0 0 1-1.02-.06A12.08 12.08 0 0 0 9.3 21c7.85 0 12.15-6.51 12.15-12.15 0-.19 0-.38-.01-.57A8.69 8.69 0 0 0 22.46 6z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
