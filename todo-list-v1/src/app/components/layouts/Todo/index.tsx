"use client";

import { useState } from "react";
import { Modal, ModalTrigger, ModalBody, ModalContent, ModalFooter } from "@/app/components/ui/AnimatedModal";
import { ConfirmDialog } from "@/app/components/layouts/ConfirmDialog";
import { TodoType } from "@/app/types/todo";


export const Todo = ({ title, description }: TodoType) => {
  const [isDone, setIsDone] = useState(false);

  const hondleDone = () => {
    setIsDone(!isDone);
  };

  return (
    <div
      className="flex items-center gap-2"
    >
      <input type="checkbox" checked={isDone} onChange={hondleDone} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <Modal>
      <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            delete
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <ConfirmDialog />
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
        </Modal>
    </div>
  );
};
