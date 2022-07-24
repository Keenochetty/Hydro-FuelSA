import React from "react";

function Section7() {
  return (
    <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/images/carvis.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-gray-800">

            </span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Why Hydro Fuel?
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24 ">
          <div className="container mx-auto px-4">
            {/* <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center  ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg shadow-lg shadow-black   ">
                  <div className="px-4 py-5 flex-auto">
                    <div  className= " text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We are dedicated to a cleaner better cheaper alternative fuel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg shadow-black rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    We are dedicated to a cleaner better cheaper alternative fuel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg shadow-black rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Disadvantages
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Fossil fuels have been used for decades, the infrastructure for this power supply already exists. 
                  Large scale adoption of hydrogen fuel cell technology for
                   automotive applications will require new On Demand H2 system to support it.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Despite being the most abundant element in the Universe, hydrogen does not exist on its own so needs to be extracted from water 
                via electrolysis or separated from carbon fossil fuels. Both of these processes require a significant amount of energy to achieve.

                </p>
                
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg shadow-black rounded-lg bg-lightBlue-200">
                  <img
                    alt="..."
                    src="https://assets.thehansindia.com/hansindia-bucket/7632_Earth.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                    How does fossil fuel affect water?
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                      The process of ocean acidification is surprisingly simple. 
                      Carbon dioxide from the burning of fossil fuels accumulates in the atmosphere, 
                      where it causes global warming. 
                      But it also affects our oceans. As carbon dioxide enters the ocean, it reacts with sea water to form carbonic acid.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg shadow-black rounded-lg bg-lightBlue-200">
                  <img
                    alt="..."
                    src="/images/liter.JPG"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                      
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                      The PEM System help's the motor vehicles release Hydro Carbon into the atmosphere which can 
                      easily be broken down through condensation and inturn being a more viable counter part than CarbonDioxcid(CO2).
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Advantages of PEM System</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The PEM System uses reduced amounts of energy to efficiently create On Demand H2 
                    Ensuring that low amounts of H2 is kept on hand to avoid volatile containment requirements.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Hydrogen fuel cells offer greater efficiencies with regard to usage times. 
                    A hydrogen adapted vehicle  uses 
                    Avg. 1lt (H2O)/1000km 
                    Drastically increasing the range of those that use just fossil fuels.

                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" relative block bg-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 "
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        
      </main>
    
  );
}

export default Section7;