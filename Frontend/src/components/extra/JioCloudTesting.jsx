import { JioCloudTestingData } from "../../db/data";
import { JioTranslateTestingData } from "../../db/data";

import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import CustomPieChart from "../charts/CustomPieChart";



const JioCloudTesting = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
        <div className="flex items-center justify-center text-center h-screen w-screen">
          <DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
            <div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
              <IoClose
                onClick={() => setOpen(false)}
                color="white"
                size={26}
                className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
              />
              <p className="font-bold text-4xl text-center py-2">
                JioCloud App Testing
              </p>
            </div>

            <div className="bg-gray-100 p-8 mt-2 mb-2 rounded-md shadow-md max-w-4xl mx-auto">
              {/* <h1 className="text-2xl font-bold text-center mb-6">
                JioTranslate Testing Summary
              </h1> */}

              {/* Project Overview Section */}
              <section className="bg-white p-6 rounded-lg shadow mb-8">
                <h2 className="text-lg font-semibold mb-4">Task Overview</h2>
                <p className="bg-white rounded-lg ">
                Our team worked on testing the JioCloud app, ensuring seamless functionality across key features like app installation, account management, file syncing, and troubleshooting
                </p>
              </section>

              {/* Total Issues Raised */}
              {/* <section className="mb-6">
                <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Total Issues Raised</h2>
                  <span className="text-2xl font-bold">11</span>
                </div>
              </section> */}

              {/* Versions Tested */}
              <section className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="bg-white p-4 rounded-lg items-center flex gap-6">
                  <ul className="list-disc ml-6 space-y-2 flex-1">
                    <h2 className="text-lg font-semibold mb-5 -ml-5">Versions Tested</h2>
                    <li>
                      <span className="">Android v21.0.19</span>
                    </li>
                    <li>
                      <span className="">Android v21.0.20</span>
                    </li>
                    <li>
                      <span className="">Android v21.0.21</span>
                    </li>
                    <li>
                      <span className="">Android v21.0.25</span>
                    </li>
                    <li>
                      <span className="">Android v21.0.32</span>
                    </li>
                    <li>
                      <span className="">Android v21.0.32</span>
                    </li>
                    <li>
                      <span className="">Android v21.0.32</span>
                    </li>
                    <li>
                      <span className="">IOS V70.5.22(12)</span>
                    </li>
                    <li>
                      <span className="">IOS V70.5.22(19)</span>
                    </li>
                    <li>
                      <span className="">IOS V70.5.22(35)</span>
                    </li>
                    <li>
                      <span className="">IOS V70.5.23(3)</span>
                    </li>
                    <li>
                      <span className="">IOS V70.5.25(7)</span>
                    </li>
                    <li>
                      <span className="">IOS V70.6.0(51)</span>
                    </li>
                  </ul>

                  {/* Pie Chart and Legend */}
                  <div className="flex-1 mb-14 mr-7">
                    <CustomPieChart
                      data={JioCloudTestingData}
                      legend={false}
                      radiusValue={60}
                    />
                  </div>
                </div>
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default JioCloudTesting;
