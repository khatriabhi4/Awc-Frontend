"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

interface FilterProps {
  title: string;
  filterList: any[];
  handleFilter: (data: string | any) => void;
  checked: string[] | any;
}

const Filter: React.FC<FilterProps> = ({
  title,
  filterList,
  handleFilter,
  checked,
}) => {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => setOpen(!open);
  const handleViewMore = () => setShowAll(!showAll);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  function handleSortAvgFeePerYear(data: any) {
    // sort operation
  }

  return (
    <div
      className={`w-full ${title === "LEVEL" || title === "EXAM ACCEPTED" ? "" : "border-b"} mb-5 border-zinc-500 pb-5`}
    >
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={handleOpen}
      >
        <span className="font-bold uppercase text-blue-500">{title}</span>
        <span className="font-light">
          {open ? (
            <IoIosArrowDown className="transition-all duration-300" />
          ) : (
            <IoIosArrowDown className="-rotate-180 transition-all duration-300" />
          )}
        </span>
      </div>
      {open && (
        <div>
          {title !== "COURSE DURATION" &&
            title !== "AVG FEE PER YEAR" &&
            title !== "PROGRAM TYPE" &&
            title !== "COLLEGE TYPE" &&
            title !== "GENDER ACCEPTED" && (
              <div className="searchBar relative">
                <input
                  type="text"
                  className="my-2 w-full rounded border border-zinc-500 p-2 pl-4 text-sm shadow-md outline-none"
                  placeholder={`Search ${title.toLowerCase()}`}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IoIosSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            )}
          <div className="h-full max-h-48 overflow-y-auto">
            {/* STREAM | MODE | LEVEL | STATE | CITY | COURSE | PROGRAM TYPE  */}
            {(title === "STREAM" ||
              title === "MODE" ||
              title === "LEVEL" ||
              title === "STATE" ||
              title === "CITY" ||
              title === "COURSE" ||
              title === "PROGRAM TYPE" ||
              title === "EXAM ACCEPTED" ||
              title === "AFFILIATION" ||
              title === "COLLEGE CATEGORY" ||
              title === "COLLEGE TYPE") && (
              <>
                {filterList
                  ?.reduce((uniqueStreams: string[], filter: any) => {
                    if (!uniqueStreams.includes(filter)) {
                      uniqueStreams.push(filter);
                    }
                    return uniqueStreams;
                  }, [])
                  .slice(0, showAll ? filterList?.length : 5)
                  .map((item: string) => (
                    <div
                      key={item}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="checkbox"
                        id={item}
                        name={item}
                        checked={checked.includes(item)}
                        className="cursor-pointer"
                        onChange={() => handleFilter(item)}
                      />
                      <label
                        htmlFor={item}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                {!showAll && filterList.length > 5 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* RANKING | GENDER ACCEPTED | AVG FEE PER YEAR */}
            {(title === "RANKING" ||
              title === "GENDER ACCEPTED" ||
              title === "AVG FEE PER YEAR") && (
              <>
                {filterList
                  ?.reduce((uniqueStreams: string[], filter: any) => {
                    if (!uniqueStreams.includes(filter)) {
                      uniqueStreams.push(filter);
                    }
                    return uniqueStreams;
                  }, [])
                  .slice(0, showAll ? filterList?.length : 5)
                  .map((filter: any) => (
                    <div
                      key={filter.ranking}
                      className="my-2 flex cursor-pointer items-center gap-1"
                    >
                      <input
                        type="radio"
                        id={filter}
                        name={filter}
                        checked={checked === filter}
                        className="cursor-pointer"
                        onChange={() => handleFilter(filter)}
                      />
                      <label
                        htmlFor={filter}
                        className="text-secondary-text hover:text-primary text-base font-medium"
                      >
                        {filter}
                      </label>
                    </div>
                  ))}
                {!showAll && filterList.length > 5 && (
                  <p
                    className="cursor-pointer text-right font-medium text-blue-500"
                    onClick={handleViewMore}
                  >
                    See All
                  </p>
                )}
              </>
            )}
            {/* COURSE DURATION */}
            {title === "COURSE DURATION" && (
              <div className="flex flex-col gap-4 p-5">
                <p className="text-center text-xs">
                  {Math.floor(checked / 12)} years {checked % 12} months
                </p>
                <input
                  type="range"
                  min="1"
                  max="96" // 8 years * 12 months/year = 96 months
                  value={checked}
                  onChange={(e: any) => handleFilter(parseInt(e.target.value))}
                  className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 outline-none"
                  style={{
                    cursor: "pointer",
                    background: `linear-gradient(to right, rgb(59 130 246) ${checked}%, rgb(229 231 235) ${checked}%)`,
                  }}
                />
                <div className="flex justify-between">
                  <span>1 month</span>
                  <span>8 years</span>
                </div>
              </div>
            )}
          </div>
          {title === "AVG FEE PER YEAR" && (
            <div className="mt-2 flex flex-wrap gap-1">
              <button
                className="rounded  border border-blue-500 px-3 py-2 text-blue-500 [flex:1] hover:bg-blue-500 hover:text-white"
                onClick={() => handleSortAvgFeePerYear("min")}
              >
                ₹ Min
              </button>
              <button
                className="rounded border border-blue-500 px-3 py-2 text-blue-500 [flex:1] hover:bg-blue-500 hover:text-white"
                onClick={() => handleSortAvgFeePerYear("max")}
              >
                ₹ Max
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white"
                onClick={() => handleSortAvgFeePerYear("go")}
              >
                Go
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
