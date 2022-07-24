import React from "react";

function Section2() {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:rounded-lg lg:h-full"
              // style="background-image:url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"
            >
              <img src="/images/Desel.jpg" />
            </div>
          </div>
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
              <span className="text-blue-600 dark:text-blue-400">
                Desalination?
              </span>
            </h2>
            <p className="py-2 text-gray-700 dark:text-gray-400">
              Desalination changes salt water into a drinkable water. In return
              we use this water for our HHO system. By doing this we do not
              deplete our dams. The by product of Desalination is fresh water
              and mineral salt.
            </p>
            {/* <p className="mt-4 text-gray-600 dark:text-gray-400">
              
              500W/1000W/1500W/2000W HHO to Electricity Generator
              Easy to install 
              Corrosion Free
              High Efficiency 
              Just needs Pure water
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
