import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const JioEducation = ({ open, setOpen }) => {
  const buildData = [
    { version: "4.0(10)", issues: 13 },
    { version: "4.0(14)", issues: 7 },
    { version: "4.0(15)", issues: 4 },
    { version: "Total", issues: 24 },
  ];

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
              <h2 className="font-bold text-4xl text-center py-2">
                FAQ's JioCloud PC
              </h2>
            </div>
            {/* <div className="p-8">
							<div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md mt-2 p-2">
								<h4 className="font-bold text-2xl mb-4">Task Overview</h4>
								<p className="text-lg font-semibold">
									We performed testing for JioEducation that was showcased in
									IMC. India Mobile Congress(IMC) is the country's first and
									biggest event connecting mobile, internet and technology. It
									is the biggest platform for digital technologies in the world.
									JioEducation is an application that uses AI to generate a
									brief summary of the scanned pages.
								</p>
							</div>
							<div className="flex gap-2">
								<div className="flex-1 mt-10 shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md p-2 flex flex-col items-center ">
									<h4 className="font-bold text-2xl mb-4">JioEducation Logo</h4>
									<img
										src="/images/extra/JioEducation.png"
										alt="JioEducation Logo"
										srcset=""
										width={"50%"}
										className="rounded-lg h-full"
									/>
								</div>
								<div className="flex-1 mt-10 shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-md p-2 flex flex-col">
									<h4 className="font-bold text-2xl mb-4">Data Summary</h4> */}
            {/* <div className="space-y-2">
										{buildData.map((build) => (
											<div key={build.version} className="flex items-center">
												<div className="w-16 text-sm font-medium">
													{build.version}
												</div>
												<div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
													<div
														className="h-full bg-blue-600"
														style={{
															width: `${(build.issues / maxIssues) * 100}%`,
														}}
													/>
												</div>
												<div className="w-8 text-right text-sm font-semibold">
													{build.issues}
												</div>
											</div>
										))}
									</div> */}
            {/* <div className="h-full pb-4">
										<table className="h-full">
											<tr>
												<th>Build Version</th>
												<th>Issue Count</th>
											</tr>
											{buildData.map((item, index) => (
												<tr key={index}>
													<td>{item.version}</td>
													<td>{item.issues}</td>
												</tr>
											))}
										</table>
									</div> */}
            {/* </div>
							</div>
						</div> */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-center mb-6">
                Team Accomplishments: JioCloud PC FAQ
              </h1>

              {/* Project Overview Section */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                <p className="bg-white p-4 rounded-lg shadow">
                  Our team worked on creating a comprehensive FAQ section for
                  JioCloud PC, covering key aspects like setup, device
                  compatibility, account creation, subscription details, and
                  troubleshooting. We ensured that users have easy access to
                  information regarding common issues with peripherals,
                  registration, and login processes.
                </p>
              </section>

              {/* Key Deliverables Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Key Deliverables</h2>
                <ul className="list-disc ml-6 bg-white p-4 rounded-lg shadow space-y-2">
                  <li>
                    <strong>Drafted FAQs:</strong> Addressing device setup,
                    performance, and troubleshooting.
                  </li>
                  <li>
                    <strong>Detailed Guidance:</strong> On registering for
                    JioCloud PC, managing subscriptions, and connecting
                    peripherals.
                  </li>
                  <li>
                    <strong>Step-by-Step Solutions:</strong> For common issues
                    and setup instructions to improve user experience.
                  </li>
                </ul>
              </section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default JioEducation;
