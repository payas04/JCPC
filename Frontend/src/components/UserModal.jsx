import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import CustomPieChart from "./CustomPieChart";

export default function UserModal({
  open,
  setOpen,
  heading,
  blocker,
  critical,
  major,
  normal,
  minor,
}) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 w-full bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in p-4"
      />

      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full w-[48rem] mx-auto items-end justify-center  text-center sm:items-center ">
          <DialogPanel
            transition
            className="relative bg-white transform overflow-hidden rounded-lg  text-left shadow-xl transition-all w-full data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="mx-auto bg-white w-full  rounded-lg overflow-hidden shadow-lg">
              <div className="h-32 w-full bg-gray-800"></div>
              <div className="px-4">
                <div className="relative  px-4 pb-4">
                  <div className="absolute -top-12 left-4">
                    <img
                      className="w-24 h-24 rounded-full border-4 border-white"
                      src="/images/Binit.jpg"
                      alt="Profile picture"
                    />
                  </div>
                  <div className="pt-16">
                    <h1 className="text-2xl font-bold">Nishad Khare</h1>
                    <p className="text-gray-600">@Tester</p>
                    <p className="mt-2 text-gray-700">
                      Versatile team player who delivers value through
                      innovative problem-solving and initiative.
                    </p>
                    <div className="mt-7 flex gap-3 text-nowrap ">
                      <div className="">
                        <h2 className="text-lg font-semibold mt-2">
                          Courses Completed:
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Introduction to Generative AI</li>
                        </ul>

                        <h2 className="text-lg font-semibold mt-4">
                          Extra Activities:
                        </h2>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>AI Think tank</li>
                          <li>Worked on UI/UX Projects (Figma)</li>
                          <li>ChromeBox Testing</li>
                        </ul>
                      </div>
                      <div className="">
                        <CustomPieChart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
