import React from "react";
import { sendPeayload } from "./../redux/paymentSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import { useAppDispatch } from "../redux/state";
import MyPaymentForm from "./payment/PayForm";
interface IPaymentData {
  open: boolean;
  idB: number | null;
  setOpen: (el: boolean) => void;
}
const PaymentForm: React.FC<IPaymentData> = ({ idB, open, setOpen }) => {
  return (
    <div
      className={`bg-black absolute top-[50%] ${open ? "block" : "hidden"} 
       left-[50%] translate-x-[-50%] top-[30%] flex flex-col px-[30px] py-[25px] pt-[35px] rounded-[10px]`}
      // method="POST"
      // onSubmit={() => send({ suma, idB })}
      // action=""
    >
      <AiFillCloseCircle
        onClick={() => setOpen(false)}
        className="absolute right-[-20px] top-[-20px] w-[40px] h-[40px] bg-[black] shadow-sm shadow-white cursor-pointer rounded-[50%] border border-solid border-black"
      />
      <MyPaymentForm />
    </div>
  );
};

export default PaymentForm;
