"use client";
import React, { useState } from "react";
import Link from "next/link";

function Page2Form() {
  const [courseSelected, setCourseSelected] = useState("");
  const [collegeSelected, setCollegeSelected] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [years, setYears] = useState(0);
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleCourse = (e: any) => {
    setCourseSelected(e.target.value);
  };

  const handleCollege = (e: any) => {
    setCollegeSelected(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!gender) {
      setError("Please select an option for Gender");
      return;
    }
    const formData = {
      gender,
      collegeSelected,
      courseSelected,
      percentage,
      years,
    };
    console.log(formData);
    setError(""); // Clear any previous error message
    //window.location.href = "/register-3"; // Change this to your next page URL
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 lg:relative lg:left-[50%] lg:mt-0 lg:w-1/2">
        <p className="text-sm">Select Your Gender</p>
        <div className="mt-2 flex justify-between">
          <div>
            <input
              className="mx-2"
              type="radio"
              id="male"
              value="Male"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Male"}
            />
            <label className="text-sm text-[#012148]" htmlFor="male">
              Male
            </label>
          </div>
          <div>
            <input
              className="mx-2"
              type="radio"
              id="female"
              value="Female"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Female"}
            />
            <label className="text-sm text-[#012148]" htmlFor="female">
              Female
            </label>
          </div>
          <div>
            <input
              className="mx-2"
              type="radio"
              id="rather-not-say"
              value="Rather Not Say"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Rather Not Say"}
            />
            <label className="text-sm text-[#012148]" htmlFor="rather-not-say">
              Rather Not Say
            </label>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-4 text-lg text-[#012148] lg:mt-0">
          Current Education Details
        </p>
        <div className="my-4 gap-8 lg:flex">
          <select
            className={`w-full rounded-lg border-2 px-4 py-2 lg:w-1/2 ${collegeSelected ? "border-black text-black" : "text-gray-400 "}`}
            onChange={handleCollege}
            required
          >
            <option value="" selected disabled hidden>
              Select Graduating College
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>

          <select
            className={`mt-5 w-full rounded-lg border-2 px-4 py-2 lg:mt-0 lg:w-1/2 ${courseSelected ? "border-black text-black" : "text-gray-400 "}`}
            onChange={handleCourse}
            required
          >
            <option value="" selected disabled hidden>
              Which Course Did You Do
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>
        </div>
      </div>

      <div className="mt-8 lg:flex gap-8">
        <div className="flex lg:w-1/2 flex-col">
          <div className=" flex w-full items-center justify-between mt-2 ">
            <p className="text-gray-400">Graduation Percentage</p>
            <div className="rounded-lg border-2 py-3 px-6  text-gray-400">
              {percentage}
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={percentage}
            required
            className="w-full cursor-pointer mt-2"
            onChange={(e) => {
              setPercentage(Number(e.target.value));
            }}
          />

          <div className="flex w-full mt-2 items-center justify-between px-2 text-gray-400">
            <p>0</p>
            <p>100%</p>
          </div>
        </div>

        <div className="flex lg:w-1/2 flex-col">
          <div className=" flex w-full  items-center justify-between mt-2 ">
            <p className="text-gray-400">Experience in Years</p>
            <div className="rounded-lg border-2  py-2 px-6 text-gray-400">
              {years}
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={10}
            value={years}
            required
            className="w-full cursor-pointer mt-2"
            onChange={(e) => {
              setYears(Number(e.target.value));
            }}
          />

          <div className="flex w-full mt-2 items-center justify-between px-2 text-gray-400">
            <p>0</p>
            <p>10</p>
          </div>
        </div>
      </div>

      

      {error && <div className="mt-4 text-red-600">{error}</div>}

      <div className="mt-8 lg:flex justify-between">
        <Link href="/register-1">
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

export default Page2Form;
