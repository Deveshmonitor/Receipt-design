// Receipt.js
import React from "react";

const App = () => {
  return (
    <div className="w-11/12 m-auto text-indigo-900 border-2 my-6 p-2 rounded-lg border-indigo-900">
      <div className="w-full mx-auto relative">
        <div className="text-center mb-4 flex justify-center">
          <h2 className="text-md uppercase px-2 md:mt-0 mt-6 py-1 font-bold border-2 rounded-lg border-indigo-900">
            Receipt
          </h2>
          <h3 className="absolute right-0 top-0">
            Reg No: HOMOEOCL/469/JUN-12
          </h3>
          {/* Other header information */}
        </div>
      </div>

      <div>
        <h1 className="text-4xl uppercase text-center font-extrabold">
          HOMOEO HOPES
        </h1>
        <p className="text-center ">
          (Advance homoeopathic Clinic & Research Centre,Bhopal){" "}
        </p>
        <p className="font-semibold text-center ">
          G4 Jeevan Sagar Apartment Malviya Nagar Bhopal
        </p>
      </div>

      <div className="flex justify-between">
        <h1>NO.</h1>
        <h1>Date:.....................</h1>
      </div>
      <div>
        <h1>
          RECEIVED with thanks from............................................{" "}
        </h1>
        <h1>
          the sum of Rupess..............................................{" "}
        </h1>
        <h1>
          BY CASE/ G-PAY/ PAYTM/ UPI/ NEFT/ RTGS/
          IMPS............................................{" "}
        </h1>
        <h1>Date:....................</h1>
      </div>

      <div className="flex m-auto">
        <h1>
          For Consultation .............Rs.For.............days with medicinal
          Charges...........Rs For..............days
        </h1>
      </div>
      <div className="flex justify-between items-center my-1 md:gap-0 gap-2">
        <div className="md:w-1/6 w-1/2 h-12 flex justify-start items-center text-indigo-900 border-4 p-2 border-indigo-900 rounded-xl">
          <button className="bg-indigo-900 text-white font-bold text-xl rounded-md p-0.5">
            Rs.
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-center">For: HOMEO HOPES</h1>
          <p className="md-text-base text-sm text-center">
            (Advance homoeopathic Clinic & Research Centre,Bhopal){" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
