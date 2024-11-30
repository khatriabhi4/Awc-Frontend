"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

function Page4Form() {
  const [userOtp, setUserOtp] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Entered OTP:", userOtp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mt-6 md:font-semibold text-xl font-bold  text-[#012148]">Verify Phone Number</p>
      <p className="mt-2 font-semibold text-sm text-[#012148]">
        A 4 digit One-Time Password has been sent to 7213425232
      </p>
      <div className="otp my-5">
        <OtpInput
          inputStyle="OTPInputStyle"
          inputType="number"
          value={userOtp}
          onChange={setUserOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          shouldAutoFocus
          placeholder={"____"}
        />
      </div>
      <p className="mt-2 font-semibold text-sm text-[#012148]">
        Didn’t receive the code? Request again in{" "}
        <span className="text-[#2095f2] ml-1">00:21</span>
      </p>
      <button
        type="submit"
        className="text-lg mt-8 font-medium bg-[#2095f2] text-white py-2 px-20 rounded-lg"
      >
        SUBMIT OTP
      </button>
    </form>
  );
}

export default Page4Form;
