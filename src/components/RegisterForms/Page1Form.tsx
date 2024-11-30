"use client";
import React, { useState } from "react";
import India from "@/asset/regsiterForms/india.png";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import Link from "next/link";

const Page1Form: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState<string>("");
  const [citySelected, setCitySelected] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionSelected(e.target.value);
  };

  const handleCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCitySelected(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure only numeric values are entered
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !optionSelected || !citySelected || !email || !number) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (number.length !== 10) {
      setErrorMessage("Contact number must be exactly 10 digits.");
      return;
    }

    const formData = {
      name,
      optionSelected,
      citySelected,
      email,
      number,
    };
    console.log(formData);

    // If all fields are filled, redirect to the next page
    //window.location.href = "/register-2";
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit}>
        <div className="lg:flex gap-4">
          <input
            className={`lg:w-1/2 w-full rounded-lg border-2 px-4 py-2 ${name ? "border-black" : ""}`}
            type="text"
            placeholder="Name"
            required
            onChange={handleName}
          />
          <select
            className={`lg:w-1/2 w-full mt-5 lg:mt-0 rounded-lg border-2 px-4 py-2 ${optionSelected ? "border-black text-black" : "text-gray-400"}`}
            onChange={handleOption}
            required
          >
            <option value="" selected disabled hidden>
              Select Preferred Stream
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Com">B.Com</option>
            <option value="BBA">BBA</option>
            <option value="M.Tech">M.Tech</option>
            <option value="M.Com">M.Com</option>
            <option value="MBA">MBA</option>
          </select>
        </div>

        <div className="lg:mt-8 mt-5 lg:flex gap-4">
          <div className="flex lg:w-1/2 w-full gap-4">
            <div className="flex items-center rounded-lg border-2 px-4 py-2">
              <Image src={India} alt="india logo" width={26} />
              <p className="ml-1 text-gray-400">+91</p>
            </div>

            <input
              className={`w-3/4 rounded-lg border-2 px-4 py-2 ${number ? "border-black" : ""}`}
              type="text"
              placeholder="Contact Number"
              value={number}
              onChange={handleNumber}
              required
            />
          </div>

          <select
            className={`lg:w-1/2 w-full mt-5 lg:mt-0 rounded-lg border-2 px-4 py-2 ${citySelected ? "border-black text-black" : "text-gray-400"}`}
            onChange={handleCity}
            required
          >
            <option value="" selected disabled hidden>
              City You Live In
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>
        </div>

        <div className="mt-8 lg:flex gap-4">
          <input
            className={`lg:w-1/2 w-full rounded-lg border-2 px-4 py-2 ${email ? "border-black" : ""}`}
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmail}
          />
          <div className="flex mt-5 lg:mt-0 gap-6">
            <Switch size="small" />
            <p>Enable updated & important information on Whatsapp.</p>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-4 text-red-600">
            {errorMessage}
          </div>
        )}

        <div className="lg:mt-10 mt-6 lg:flex flex-row-reverse items-center justify-between">
        <button type="submit" className="rounded-lg bg-[#2095f2] xl:px-14 lg:px-10 py-2 lg:w-1/4 w-full text-lg font-medium text-white">
            NEXT
          </button>
          <div className="lg:w-1/2 w-full mt-5 lg:mt-0 text-center lg:text-start">
            <p className="text-sm text-gray-400">
              By proceeding ahead you expressly agree to the Acchawalacollege{" "}
              <span className="text-[#2095f2]">
                <Link href={""}>Terms & Conditions</Link>
              </span>{" "}
              and{" "}
              <span className="text-[#2095f2]">
                <Link href={""}>Privacy Policy</Link>
              </span>{" "}
            </p>
            <p className="mt-6 text-sm text-[#2095f2]">
              Already have an account?
              <Link className="mx-2 underline" href={""}>
                Login
              </Link>{" "}
            </p>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default Page1Form;
