'use client'
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export declare interface IModalProps {
    modalContent: any;
    open?: boolean;
    [key: string]: any;
    success?: boolean,
    onClose?: () => void;
}

export const ModalComponent: React.FC<IModalProps> = ({ modalContent, style, icon, vstyle }) => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="fixed inset-0 flex items-center justify-center">
                            <div className={`relative transform  rounded-lg bg-white px-4 pb-4 pt-4 text-left shadow-xl transition-all ${vstyle}`}>
                                {modalContent}
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 p-2 mt-2 rounded-full bg-gray-100 hover:bg-gray-400 text-gray-800 hover:text-gray-900"
                                    onClick={() => setOpen(false)}
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>

                </Dialog>
            </Transition.Root>
        </>
    );
};

