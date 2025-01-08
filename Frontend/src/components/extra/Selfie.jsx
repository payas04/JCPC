import React from "react";
import BarGraph from "../charts/BarGraph";
import { selfieBarData } from "../../db/data";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { JioTranslateTestingData } from "../../db/data";

import CustomPieChart from "../charts/CustomPieChart";

const Selfie = ({ open, setOpen }) => {
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
                JioTranslate Testing
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
                  Our team worked on creating a comprehensive FAQ section for
                  JioCloud PC, covering key aspects like setup, device
                  compatibility, account creation, subscription details, and
                  troubleshooting. We ensured that users have easy access to
                  information regarding common issues with peripherals,
                  registration, and login processes.
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
                <h2 className="text-lg font-semibold mb-4">Versions Tested</h2>
                <div className="bg-white p-4 rounded-lg  flex gap-6">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="">Android SIT Build V4.0.8(9)</span>
                    </li>
                    <li>
                      <span className="">Android SIT Build V4.0.10(11)</span>
                    </li>
                    <li>
                      <span className="">iOS Build version 4.0(4)</span>
                    </li>
                  </ul>

                  {/* Pie Chart and Legend */}
                  <div className="flex-1 ml-8">
                    <CustomPieChart
                      data={JioTranslateTestingData}
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

export default Selfie;
