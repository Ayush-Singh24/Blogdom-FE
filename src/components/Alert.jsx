import { closeAlert } from "@/redux/reducers/alert";
import { AlertStatus } from "@/utils/constants";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Alert() {
  const { alertMessage, isOpen, status } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const alertRef = useRef();

  const colorVariation = {
    success: "bg-color-success text-white",
    error: "bg-color-error text-black",
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        alertRef.current.classList.remove("animate-in", "fade-in");
        alertRef.current.classList.add("animate-out", "fade-out");
      }, 2500);
      setTimeout(() => {
        dispatch(closeAlert());
      }, 3000);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          ref={alertRef}
          className={`absolute left-5 bottom-5 py-5 px-10 rounded-lg flex items-center text-3xl ${
            status === AlertStatus.Success
              ? colorVariation.success
              : colorVariation.error
          } animate-in fade-in duration-500`}
        >
          {alertMessage}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
