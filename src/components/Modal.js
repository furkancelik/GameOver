"use client";
import { useEffect, useRef } from "react";

const Modal = ({
  showModal,
  setShowModal,
  title = "Modal Title",
  children,
}) => {
  const modalRef = useRef();

  const handleCloseClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <div
          onClick={handleCloseClick}
          className="fixed inset-0 flex items-center justify-center z-50 text-black"
        >
          <div className="fixed inset-0 bg-black opacity-60"></div>
          <div
            ref={modalRef}
            className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-xs w-full"
          >
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 "
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {children}
              {/* <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
