import React, { useState } from "react";
import Selfie from "../../components/extra/Selfie";
import OsComparison from "../../components/extra/OsComparison";
import PeripheralsComparison from "../../components/extra/PeripheralsComparison";
import { Card, CardContent, CardMedia } from "@mui/material";
import Faq from "../../components/extra/Faq";
import JioCloudTesting from "../../components/extra/JioCloudTesting";

const Activities = () => {
  const [open, setOpen] = useState(false);
  const [openSelfie, setOpenSelfie] = useState(false);
  const [openPeripherals, setOpenPeripherals] = useState(false);
  const [openFaq, setOpenFaq] = useState(false);
  const [openJioCloud, setOpenJioCloud] = useState(false);

  return (
    <section className="container pt-12 p-6 flex flex-col h-full overflow-scroll">
      <header className="mb-4 px-6">
        <h2 className="text-4xl font-bold">Extra Activities</h2>
      </header>
      <div className="flex-grow flex justify-between items-center gap-6 p-6 mb-10">
        {/* OS Comparison */}
        <Card className="activityCard" onClick={() => setOpen(true)}>
          <OsComparison open={open} setOpen={setOpen} heading={"hiii"} />
          <CardMedia sx={{ height: 200 }} image="/images/extra/3.jpg" />
          <CardContent>
            <div className="">
              <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                Comparison
              </p>
              <h3 className="text-lg font-semibold">OS Comparison</h3>
              <p className="text-sm text-gray-600">
                Exploring low end operating system technology with Linux
                distributions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Peripherals Comparison */}
        <Card className="activityCard" onClick={() => setOpenPeripherals(true)}>
          <PeripheralsComparison
            open={openPeripherals}
            setOpen={setOpenPeripherals}
            heading={"hii"}
          />
          <CardMedia sx={{ height: 200 }} image="/images/extra/1.jpg" />
          <CardContent>
            <div className="">
              <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                Comparison
              </p>
              <h3 className="text-lg font-semibold">Peripherals Comparison</h3>
              <p className="text-sm text-gray-600">
                Create distinct, natural-sounding questions that users might ask
                an AI bot about WiFi.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Faq */}
        <Card className="activityCard" onClick={() => setOpenFaq(true)}>
          <Faq open={openFaq} setOpen={setOpenFaq} heading={"hii"} />
          <CardMedia sx={{ height: 200 }} image="/images/extra/2.jpg" />
          <CardContent>
            <div className="">
              <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                FAQ's
              </p>
              <h3 className="text-lg font-semibold">FAQ's JioCloud PC</h3>
              <p className="text-sm text-gray-600">
                JioEducation is an application that was showcased at the India
                Mobile Congress.
              </p>
            </div>
          </CardContent>
        </Card>
        {/* JioTranslate */}
        <Card className="activityCard" onClick={() => setOpenSelfie(true)}>
          <Selfie open={openSelfie} setOpen={setOpenSelfie} />
          <CardMedia sx={{ height: 200 }} image="/images/extra/4.jpg" />
          <CardContent>
            <div className="">
              <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                Testing
              </p>

              <h3 className="text-lg font-semibold">JioTranslate</h3>
              <p className="text-sm text-gray-600">
                Creating a dataset of selfies to train an AI model.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="activityCard" onClick={() => setOpenJioCloud(true)}>
          <JioCloudTesting open={openJioCloud} setOpen={setOpenJioCloud} />
          <CardMedia sx={{ height: 200 }} image="/images/extra/5.jpg" />
          <CardContent>
            <div className="">
              <p className="bg-blue-100 inline-block px-2 py-1 rounded-full text-blue-800 font-light font-mono text-xs mb-2">
                Testing
              </p>
              <h3 className="text-lg font-semibold">JioCloud App</h3>
              <p className="text-sm text-gray-600">
                Description of the new card.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Activities;
