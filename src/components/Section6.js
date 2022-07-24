import React from "react";
import { SiAtom } from "react-icons/si";

function Section6() {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
        <img
          className="object-cover object-center w-full h-56"
          src="/images/HHOsystem.JPG"
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <SiAtom className="w-6 h-6 text-white fill-current" />

          <h1 className="mx-3 text-lg font-semibold text-white">
            Motor Vehicles
          </h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {/* Patterson johnson */}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            Unlike alkaline water electrolysis, PEM hydrogen generators uses a
            perfluoro sulfonic acid proton exchange membrane with good chemical
            stability. It is efficient and does not cause pollution and
            corrosion.
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-5/6 h-56 mx-auto"
          src="/images/Generator.JPG"
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <SiAtom className="w-6 h-6 text-white fill-current" />
          <h1 className="mx-3 text-lg font-semibold text-white">Generator</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {/* Patterson johnson */}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            Compatible with petrol, and diesel generators.
            <br />
            Fit the Hydro Fuel system to your current generator and lower the
            fossil fuel consumption between 15-50% <br />
            Less toxic, More efficient, Cleaner burning.
          </p>
        </div>
      </div>
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src="https://senzahydrogen.com/wp-content/uploads/2022/06/uav-fuel-cell-1.jpg"
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <SiAtom className="w-6 h-6 text-white fill-current" />
          <h1 className="mx-3 text-lg font-semibold text-white">Electrical</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {/* Patterson johnson */}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            This Hydrogen fuel cell is specially equipped for small and medium
            power output systems including , portable power supplies, and
            portable micro backup power supplies.
          </p>
          <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
            {/* <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg> */}

            <span className="mx-3">
              500W/1000W/1500W/2000W HHO to Electricity Generator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
