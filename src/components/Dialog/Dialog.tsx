import { Dialog as HeadlessUIDialog, Transition } from "@headlessui/react";
import clx from "classnames";
import type { FC, MutableRefObject, PropsWithChildren } from "react";
import { Fragment } from "react";
import { DialogTitle } from "./components/DialogTitle";

export interface DialogProps {
  isOpen: boolean;
  handleClose: () => void;
  initialFocus?: MutableRefObject<HTMLElement | null> | undefined;
  isLarge?: boolean;
}

const DialogRoot: FC<PropsWithChildren<DialogProps>> = ({
  isOpen,
  handleClose,
  initialFocus,
  children,
  isLarge = false,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <HeadlessUIDialog
        onClose={handleClose}
        className="relative z-50"
        initialFocus={initialFocus}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <HeadlessUIDialog.Panel
              className={clx("mx-auto rounded-md bg-white max-h-[95vh]", {
                "w-3/4": isLarge,
              })}
            >
              {children}
            </HeadlessUIDialog.Panel>
          </div>
        </Transition.Child>
      </HeadlessUIDialog>
    </Transition>
  );
};

export const Dialog = Object.assign(DialogRoot, {
  Title: DialogTitle,
  Description: HeadlessUIDialog.Description,
});
