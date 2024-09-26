import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const UserModal = ({ open, setOpen, user }) => {
  console.log(open);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                        src="/images/Binit.jpg"
                        alt="coverImage"
                      />
                    </div>

                    {/* Profile Picture */}
                    <div className="absolute -bottom-10 left-8">
                      <img
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover"
                        src="/images/Binit.jpg"
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
                        <span className="text-gray-600 text-sm font-bold">
                          ROLES
                        </span>
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
                        I have led UAT projects and recruitment for Jio's GET
                        program, currently managing a team of 90 professionals
                        to ensure quality across key products. I am also
                        dedicated to social causes, reflecting my commitment to
                        positive societal impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UserModal;
