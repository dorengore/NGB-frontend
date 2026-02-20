import React, { useCallback, useState } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import toast from "react-hot-toast";

import RiotIcon from "../icons/riot";

import { regions } from "@/data";

interface AddSummonerModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const AddSummonerModal = ({ isOpen, onOpenChange }: AddSummonerModalProps) => {
  //@ts-ignore
  const [selectedRegion, setSelectedRegion] = useState<Selection>(null);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        // @ts-ignore
        setSelectedRegion("");
      }
      onOpenChange();
    },
    [onOpenChange]
  );

  return (
    <Modal
      backdrop="opaque"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-transparent text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isOpen={isOpen}
      radius="lg"
      size="2xl"
      onOpenChange={handleOpenChange}
    >
      <ModalContent>
        {() => (
          <div className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url(/assets/images/lolt1.jpeg)",
                // filter: "blur(1px)",
              }}
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-50 z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(27, 23, 38, 1), rgba(24, 11, 58, 0.6))",
              }}
            />
            <ModalBody className="relative z-20 p-8">
              <h2 className="text-3xl mt-20 text-center font-bold text-white ">
                Add Summoner
              </h2>
              <p className="text-center text-white text-lg">
                Add your League of Legends account to NBG.
              </p>
              {selectedRegion ? (
                <Button
                  className="bg-red-700"
                  radius="full"
                  size="lg"
                  startContent={<RiotIcon />}
                  onPress={() => {
                    toast.success("Connected With Riot Games");
                    handleOpenChange(!isOpen);
                  }}
                >
                  Continue with Riot
                </Button>
              ) : (
                <Select
                  className="mb-4"
                  label="Region"
                  labelPlacement="outside"
                  value={selectedRegion}
                  placeholder="Select Region"
                  // @ts-ignore
                  onSelectionChange={setSelectedRegion}
                >
                  {regions.map((region) => (
                    // <SelectItem key={region.key} value={region.key}>
                    //   {region.label}
                    // </SelectItem>
                    <SelectItem
                      key={region.key}
                      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                      {...({ value: region.key } as any)}
                    >
                      {region.label}
                    </SelectItem>
                  ))}
                </Select>
              )}

              {/* <Button className="w-full" color="primary">
                Add Summoner
              </Button> */}
            </ModalBody>
            {
              <ModalFooter className="relative z-20">
                <Button
                  color="danger"
                  radius="full"
                  onClick={() => {
                    handleOpenChange(!isOpen);
                  }}
                >
                  Close
                </Button>
                {selectedRegion && (
                  <Button
                    radius="full"
                    onPress={() => {
                      // @ts-ignore
                      setSelectedRegion("");
                    }}
                  >
                    Back
                  </Button>
                )}
              </ModalFooter>
            }
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AddSummonerModal;
