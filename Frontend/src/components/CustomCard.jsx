import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { useState } from "react";
import UserModal from "./UserModal";

export function CustomCard({ user, shouldOpenModal = false }) {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    console.log(open);
    if (!shouldOpenModal) {
      setOpen(true);
    }
  };

  return (
    <div onClick={handleOpenModal}>
      <UserModal open={open} setOpen={setOpen} user={user} />
      <CardContainer className="py-0 mb-10 h-64 mx-auto mt-8">
        <CardBody className="card  h-64 py-0  w-72 border px-2 mx-2 rounded-lg flex-col flex items-center text-black bg-[#bfe8f2] shadow-xl hover:shadow">
          {/* bg-gradient-to-br from-[#92d1f8] to-[#bbedff] */}
          <CardItem translateZ="64" className="w-full">
            {/* Image */}
            <img
              className="mx-auto -mt-36 w-36 rounded-full border-8 border-white outline-none "
              alt="thumbnail"
              src="/images/Binit.jpg"
            />
          </CardItem>
          {/* Info */}
          <div className="flex flex-col justify-center items-center">
            <span className="font-semibold">{user && user.Name}</span>
            <span>@developer</span>
            <span>Issue count : 100</span>
          </div>
          <CardItem
            translateZ="60"
            className="text-white text-lg max-w-sm mt-2 text-center font-semibold"
          ></CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
