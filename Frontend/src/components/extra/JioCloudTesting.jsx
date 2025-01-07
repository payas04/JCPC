import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import CustomPieChart from "../charts/CustomPieChart";
import { JioCloudTestingData } from "../../db/data";

const JioCloudTesting = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      {/* Backdrop */}
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      {/* Modal Panel */}
      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <DialogPanel className="relative w-[60%] max-h-[85%] overflow-y-auto rounded-lg bg-white shadow-xl">
            {/* Header */}
            <div className="sticky top-0 bg-blue-800 text-white z-20">
              <IoClose
                onClick={() => setOpen(false)}
                size={26}
                className="absolute top-3 right-4 cursor-pointer hover:bg-red-500 hover:rounded-full p-1"
              />
              <p className="font-bold text-3xl text-center py-3">
                JioCloud Testing
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Summary */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">
                  JioCloud App Testing Summary
                </h1>

                {/* Total Issues Raised */}
                <section className="mb-6">
                  <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                      Total Issues Raised
                    </h2>
                    <span className="text-2xl font-bold">40</span>
                  </div>
                </section>

                {/* Versions Tested */}
                <section>
                  <h2 className="text-lg font-semibold mb-4">
                    Versions Tested
                  </h2>
                  <div className="bg-white p-6 rounded-lg shadow flex gap-6">
                    {/* List of Versions */}
                    <div className="flex-1">
                      <ul className="list-disc ml-6 space-y-3">
                        {[
                          "v21.0.19",
                          "v21.0.20",
                          "v21.0.21",
                          "v21.0.25",
                          "v21.0.32",
                        ].map((version, index) => (
                          <li key={index} className="text-base font-medium">
                            {version}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pie Chart and Legend */}
                    <div className="flex-1 space-y-4">
                      <CustomPieChart
                        data={JioCloudTestingData}
                        legend={false}
                        radiusValue={60}
                      />
                      {/* <div className="space-y-3">
                        {JioCloudTestingData.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between items-center"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-7 h-7 rounded-md"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-base font-medium">
                                {item.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-base font-bold bg-gray-200 px-2 py-1 rounded-md">
                                {item.value}
                              </span>
                              <span className="text-sm text-gray-500">
                                ({((item.value / 40) * 100).toFixed(1)}%)
                              </span>
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default JioCloudTesting;
