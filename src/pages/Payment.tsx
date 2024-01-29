import React from "react";
import "./Payment.scss";

interface PaymentProps {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const Payment: React.FC<PaymentProps> = ({ setActiveStep }) => {
  const handlePaymentSuccess = () => {
    // Logic after successful payment
    setActiveStep((prevStep) => prevStep + 1); // Move to the next step
  };

  return <div>Payment</div>;
};

export default Payment;
