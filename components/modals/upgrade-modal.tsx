import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { CrownIcon } from "lucide-react";
import React, { useState } from "react";
import { Divider } from "@heroui/divider";

import BenefitsCard from "../cards/benefits-card";

import PlansModal from "./plans-modal";
import PaymentInformationModal from "./payment-info-modal";

interface UpgradeModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const UpgradeModal = ({ isOpen, onOpenChange }: UpgradeModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState("1 month");
  const {
    isOpen: isOpenPaymentInfo,
    onOpen: onOpenPaymentModal,
    onOpenChange: onOpenChangePaymentModal,
  } = useDisclosure();

  return (
    <>
      <Modal
        backdrop="opaque"
        className="overflow-hidden"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          // header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        scrollBehavior="outside"
        size="sm"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex-col p-0">
            <div
              className="w-full  rounded-sm h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('/assets/images/default-bg.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#19172c] to-[#292f46d3] opacity-90" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full  gap-2">
                <h2 className="text-3xl flex-col flex gap-4 items-center font-bold text-white">
                  <CrownIcon size={60} /> <span>Upgrade to Pro</span>
                </h2>
                <p className="text-[.8rem] text-white/80">
                  Plans start at only €2.49/month. Cancel anytime.
                </p>
                <Link className="text-white hover:text-white/80" href="#">
                  Learn More
                </Link>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <h2>Benefits</h2>
              <div>
                <BenefitsCard
                  content="Stand out from the crowd with an exclusive badge and profile frame."
                  heading="Enhanced profile"
                  imageSrc="/assets/images/valo.png"
                />
                <BenefitsCard
                  content="Stand out from the crowd with an exclusive badge and profile frame."
                  heading="Enhanced profile"
                  imageSrc="/assets/images/valo.png"
                />
                <BenefitsCard
                  content="Stand out from the crowd with an exclusive badge and profile frame."
                  heading="Enhanced profile"
                  imageSrc="/assets/images/valo.png"
                />
                <BenefitsCard
                  content="Stand out from the crowd with an exclusive badge and profile frame."
                  heading="Enhanced profile"
                  imageSrc="/assets/images/valo.png"
                />
              </div>
            </div>
            <Divider />
            <PlansModal setSelectedPlan={setSelectedPlan} />
          </ModalBody>
          <ModalFooter>
            <Button fullWidth color="primary" onPress={onOpenPaymentModal}>
              Upgrade
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <PaymentInformationModal
        isOpen={isOpenPaymentInfo}
        selectedPlan={selectedPlan}
        onOpenChange={onOpenChangePaymentModal}
      />
    </>
  );
};

export default UpgradeModal;
