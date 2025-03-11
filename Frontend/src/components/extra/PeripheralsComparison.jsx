import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const PeripheralsComparison = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-fit max-h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						{/* Heading div */}
						<div className="sticky top-0 left-0 w-full bg-blue-800 text-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="white"
								size={26}
								className="absolute top-2 right-3 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								Peripherals Comparision
							</h2>
						</div>
						<div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-2">
							{/* <h1 className="text-2xl font-bold text-center mb-6">
                Wireless Mouse and Keyboard Comparison
              </h1> */}

							{/* Mouse Highlights */}
							<section className="mb-8">
								<h2 className="text-2xl font-semibold mb-4 text-center">
									Phase 1{" "}
								</h2>
								<h2 className="text-xl font-bold mb-4">Mouse Comparison </h2>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="bg-green-200 p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">HP KM200</h3>
										<p>
											Durable, stable wireless connection, and 800-1000 DPI.
											Ideal for reliability.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Amkette Wi-Key Mini SWM01
										</h3>
										<p>Slim, portable, 1200 DPI, but requires harder clicks.</p>
									</div>
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Amkette Primus Neo
										</h3>
										<p>
											800-1600 DPI with a wide range, durable, but harder
											clicks.
										</p>
									</div>
								</div>
							</section>

							{/* Keyboard Highlights */}
							<section className="mb-8">
								<h2 className="text-xl font-bold mb-4">Keyboard Comparison</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">HP KM200</h3>
										<p>
											Full-size with a numpad, responsive keys, and minimal
											typing sound.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Amkette Wi-Key Mini SWK01
										</h3>
										<p>
											Compact, portable, with multimedia shortcuts and an Fn
											key.
										</p>
									</div>
									<div className="bg-green-200 p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Amkette Primus Neo
										</h3>
										<p>
											Full-size, moderately spaced keys, with multimedia
											shortcuts.
										</p>
									</div>
								</div>
							</section>

							{/* Final Selection */}
							<section>
								<h2 className="text-xl font-bold mb-4">Final Selection</h2>
								<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
									<ul className="list-disc ml-6 space-y-2">
										<li>
											<span className="font-semibold">
												HP KM200 Wireless Mouse and Keyboard Combo:
											</span>{" "}
											Durable, reliable, and full-size comfort.
										</li>
										<li>
											<span className="font-semibold">
												Amkette Primus Neo Wireless Combo:
											</span>{" "}
											Feature-rich, affordable, and great value.
										</li>
									</ul>
								</div>
							</section>
						</div>
						<div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-2">
							{/* <h1 className="text-2xl font-bold text-center mb-6">
    Wireless Mouse and Keyboard Comparison
  </h1> */}

							{/* Mouse Highlights */}
							<section className="mb-6">
								<h2 className="text-2xl font-semibold mb-4 text-center">
									Phase 2
								</h2>
								<h2 className="text-xl font-bold mb-4">Mouse Comparison</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Logitech Media K400 Plus
										</h3>
										<p>
											Durable, compact with a built-in touchpad, smooth and
											accurate performance. Ideal for portability.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Amkette Primus Neo
										</h3>
										<p>
											800-1600 DPI with adjustable levels, durable build, but
											requires harder clicks. Offers a wider DPI range.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">ANT ESPORTS WK100</h3>
										<p>
											Compact design with a built-in touchpad, smooth scrolling,
											and accurate performance. Best for casual use.
										</p>
									</div>
								</div>
							</section>

							{/* Keyboard Highlights */}
							<section className="mb-8">
								<h2 className="text-xl font-bold mb-4">Keyboard Comparison</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Logitech Media K400 Plus
										</h3>
										<p>
											Compact keyboard with built-in touchpad, minimal typing
											sound, and highly portable. Suitable for casual and home
											media use.
										</p>
									</div>
									<div className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">
											Amkette Primus Neo
										</h3>
										<p>
											Full-size keyboard with a numpad, moderately spaced keys,
											and multimedia shortcuts. Offers a low battery indicator.
										</p>
									</div>
									<div className="bg-white  p-4 rounded-lg shadow hover:shadow-lg">
										<h3 className="font-semibold text-lg">ANT ESPORTS WK100</h3>
										<p>
											Compact keyboard with built-in touchpad, minimal typing
											sound, and easy plug-and-play setup. Highly portable.
										</p>
									</div>
								</div>
							</section>

							{/* Final Selection
              <section>
                <h2 className="text-xl font-bold mb-4">Final Selection</h2>
                <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="font-semibold">
                        Logitech Media K400 Plus Wireless Combo:
                      </span>{" "}
                      Best for portability, built-in touchpad, and minimal noise
                      typing. Ideal for casual use and home media centers.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Amkette Primus Neo Wireless Combo:
                      </span>{" "}
                      Best for budget-friendly full-size keyboard with
                      adjustable DPI mouse. Ideal for office and standard usage.
                    </li>
                  </ul>
                </div>
              </section> */}
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default PeripheralsComparison;
