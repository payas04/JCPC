import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function CustomCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="card mx-auto mt-40 h-64  w-72 border rounded-sm flex-col flex items-center border-black bg-gradient-to-br from-[#5558da] to-[#5fd1f9] text-white shadow-xl hover:shadow">
        <CardItem translateZ="100" className="w-full">
          <img
            className="mx-auto -mt-36 w-36 rounded-full border-8 border-white outline  outline-black"
            alt="thumbnail"
            src="/images/Binit.jpg"
          />
        </CardItem>

        <CardItem
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 text-center font-semibold"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
