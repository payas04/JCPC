import { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const products = [
  {
    name: "JioPC",
    img: "STB",
    description: "Affordable and efficient PC for everyday use",
    specs: [
      "CPU: Synaptics BG5CT Quad Core",
      "4GB RAM",
      "Internal Storage: 32GB",
      "Download: 220.6 Mbps",
      "Upload: 39.2 Mbps",
    ],
  },
  {
    name: "HP Chromebook",
    img: "HPChromebook",
    description: "Powerful laptop for professionals",
    specs: [
      "CPU: Mediatek MT8183",
      "4GB RAM LPDDR4X-4266 SDRAM",
      "GPU: ARM Mali-G72 MP3 Graphics",
      "Internal Storage: 32GB eMMC 5.0",
      "Download: 216.3 Mbps",
      "Upload: 21.8 Mbps",
    ],
  },
  {
    name: "Lenovo Chromebook",
    img: "LenovoChromebook",
    description: "Lightweight and fast for on-the-go productivity",
    specs: [
      "CPU: MediaTek Kompanio 520",
      "4GB RAM LPDDR4x-3733",
      "GPU: ARM Mali-G52 2EE MC2 GPU",
      "Internal Storage: 32GB eMMC 5.1",
      "Download: 218.4 Mbps",
      "Upload: 44.2 Mbps",
    ],
  },
];

export default function Component() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-lg p-6 text-white bg-amber-500 cursor-pointer"
      onClick={() => setOpen(true)}
    >
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative max-w-[80%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center">
                  {/* <DialogTitle
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900 mb-4"
                  >
                    Our Products
                  </DialogTitle> */}
                  <div className="grid grid-cols-3 gap-4">
                    {products.map((product, index) => (
                      <DeviceCard key={index} product={product} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
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
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium">Our Products</h3>
          <p className="text-4xl font-bold mt-2">3</p>
        </div>
        <div className="p-2 bg-white bg-opacity-30 rounded-lg">
          <FaProductHunt size={24} />
        </div>
      </div>
    </div>
  );
}

const DeviceCard = ({ product }) => {
  return (
    <div className="w-full flex flex-col  rounded overflow-hidden border-2 border-gray-300">
      <div className="font-bold text-xl mb-2 ">{product.name}</div>
      <img
        className="w-80 h-80 object-contain mx-auto "
        width={96}
        sizes
        src={`/images/devices/${product.img}.jpg`}
        alt="img"
      />
      <div className="px-6 ">
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <h3 className="font-bold text-xl mt-6 mb-5 ">Specifications:</h3>
      <ul className="list-disc pl-9 mb-5 text-left space-y-1">
        {product.specs.map((spec, specIndex) => (
          <li key={specIndex} className="text-sm text-gray-700">
            {spec}
          </li>
        ))}
      </ul>
    </div>
  );
};
