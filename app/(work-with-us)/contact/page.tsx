import { CheckIcon } from "lucide-react";

import ContactSalesForm from "@/components/forms/contact-sales-form";
import bgImage from "@/assets/images/contact-us-bg.jpg";

const ContactSalesPage = () => {
  return (
    <div
      className={` w-full mb-80  relative bg-cover h-screen`}
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))",
        }}
      />
      <div className="grid relative z-20  py-10 pt-20 grid-cols-2 px-5 justify-between w-full">
        <div className="flex flex-col gap-8 px-10">
          <h2 className="text-5xl font-bold">Contact our sales team</h2>
          <p className="text-xl">
            Let&apos;s connect and get you acquainted with NBG.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <CheckIcon />
              <span className="col-span-9 ">
                Explore use cases specific to your needs
              </span>
            </li>

            <li className="flex items-center gap-4">
              <CheckIcon className="" />
              <span className="col-span-9 ">
                See NBG in action with a personalized demo
              </span>
            </li>
            <li className="flex items-center gap-4">
              <CheckIcon />
              <span className="col-span-9 ">
                Get pricing information for you
              </span>
            </li>
          </ul>
        </div>
        <ContactSalesForm />
      </div>
    </div>
  );
};

export default ContactSalesPage;
