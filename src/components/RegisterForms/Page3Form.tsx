"use client";
import React, { useState } from "react";
import Link from "next/link";

function Page3Form() {
  const [board10th, setBoard10th] = useState("");
  const [year10th, setYear10th] = useState("");
  const [percentage10th, setPercentage10th] = useState("");
  const [school10th, setSchool10th] = useState("");

  const [board12th, setBoard12th] = useState("");
  const [year12th, setYear12th] = useState("");
  const [percentage12th, setPercentage12th] = useState("");
  const [school12th, setSchool12th] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const formData = {
      board10th,
      year10th,
      percentage10th,
      school10th,
      board12th,
      year12th,
      percentage12th,
      school12th,
    };
    console.log(formData);
    // Redirect to the next page
    window.location.href = "/register-4";
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mt-6 font-semibold text-[#012148]">Past Education Details</p>
      <p className="mt-2 text-sm text-[#012148]">10th Standard</p>
      <div className="my-4 lg:flex gap-8">
        <select
          className={`lg:w-1/2 w-full rounded-lg border-2 px-4 py-2 ${board10th ? "border-black text-black" : "text-gray-400 "}`}
          value={board10th}
          onChange={(e) => setBoard10th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select 10th Board
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Ludhiana">Ludhiana</option>
        </select>

        <select
          className={`lg:w-1/2 w-full rounded-lg mt-5 lg:mt-0 border-2 px-4 py-2 ${year10th ? "border-black text-black" : "text-gray-400 "}`}
          value={year10th}
          onChange={(e) => setYear10th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select 10th Passing Year
          </option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>
      <div className="my-4 lg:flex gap-8">
        <select
          className={`lg:w-1/2 w-full rounded-lg border-2 px-4 py-2 ${percentage10th ? "border-black text-black" : "text-gray-400 "}`}
          value={percentage10th}
          onChange={(e) => setPercentage10th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            10th Percentage
          </option>
          <option value="90">90%</option>
          <option value="80">80%</option>
          <option value="70">70%</option>
          <option value="60">60%</option>
          <option value="50">50%</option>
        </select>

        <select
          className={`lg:w-1/2 w-full rounded-lg mt-5 lg:mt-0 border-2 px-4 py-2 ${school10th ? "border-black text-black" : "text-gray-400 "}`}
          value={school10th}
          onChange={(e) => setSchool10th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            10th School Name
          </option>
          <option value="Delhi School">Delhi School</option>
          <option value="Mumbai School">Mumbai School</option>
          <option value="Chennai School">Chennai School</option>
          <option value="Kolkata School">Kolkata School</option>
          <option value="Jaipur School">Jaipur School</option>
          <option value="Ludhiana School">Ludhiana School</option>
        </select>
      </div>

      <p className="mt-2 text-sm text-[#012148]">12th Standard</p>
      <div className="my-4 lg:flex gap-8">
        <select
          className={`lg:w-1/2 w-full  rounded-lg border-2 px-4 py-2 ${board12th ? "border-black text-black" : "text-gray-400 "}`}
          value={board12th}
          onChange={(e) => setBoard12th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select 12th Board
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Ludhiana">Ludhiana</option>
        </select>

        <select
          className={`lg:w-1/2 w-full rounded-lg mt-5 lg:mt-0 border-2 px-4 py-2 ${year12th ? "border-black text-black" : "text-gray-400 "}`}
          value={year12th}
          onChange={(e) => setYear12th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select 12th Passing Year
          </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div className="my-4 lg:flex gap-8">
        <select
          className={`lg:w-1/2 w-full rounded-lg border-2 px-4 py-2 ${percentage12th ? "border-black text-black" : "text-gray-400 "}`}
          value={percentage12th}
          onChange={(e) => setPercentage12th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            12th Percentage
          </option>
          <option value="90">90%</option>
          <option value="80">80%</option>
          <option value="70">70%</option>
          <option value="60">60%</option>
          <option value="50">50%</option>
        </select>

        <select
          className={`lg:w-1/2 w-full mt-5 lg:mt-0 rounded-lg border-2 px-4 py-2 ${school12th ? "border-black text-black" : "text-gray-400 "}`}
          value={school12th}
          onChange={(e) => setSchool12th(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            12th School Name
          </option>
          <option value="Delhi School">Delhi School</option>
          <option value="Mumbai School">Mumbai School</option>
          <option value="Chennai School">Chennai School</option>
          <option value="Kolkata School">Kolkata School</option>
          <option value="Jaipur School">Jaipur School</option>
          <option value="Ludhiana School">Ludhiana School</option>
        </select>
      </div>

      <div className="mt-8 lg:flex justify-between">
        <Link href="/register-2">
          <button
            type="button"
            className="rounded-lg border-2 border-[#2095f2] bg-white px-20 py-2 text-lg w-full font-medium text-[#2095f2]"
          >
            BACK
          </button>
        </Link>
        <button
          type="submit"
          className="rounded-lg mt-8 lg:mt-0 bg-[#2095f2] xl:px-20 py-2 lg:w-2/5 xl:w-auto w-full text-lg font-medium text-white"
        >
          NEXT
        </button>
      </div>
    </form>
  );
}

export default Page3Form;
