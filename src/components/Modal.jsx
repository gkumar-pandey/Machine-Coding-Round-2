import React from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ children, open, handleModal }) => {
  if (!open) {
    return null;
  }
  return createPortal(
    <div className="modal flex items-center justify-center    ">
      <div className="modal-content  bg-slate-900 p-4 rounded  ">
        <div className=" flex justify-between m-3  ">
          <h1 className=" text-white text-2xl font-sans font-semibold ">
            Title
          </h1>
          <RxCross1
            onClick={handleModal}
            className=" text-3xl text-white font-extrabold cursor-pointer "
          />
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
