
export default function contact () {
  return (
    <main  className=" h-full" >
      <section className="flex flex-col items-center ">
        <h1 className="text-[#2C2F24] text-6xl font-serif font-medium my-6 text-center ">
        Contact Us
        </h1>
        <p className="text-[#495460] text-center  z-50">
          
        We Account for All the Factors Driving Transformation and Provide You with the Essential Elements
        You Must Evolve to Make Real Transformation a Reality.
        </p>

      {/* form container */}
        <div className="h-auto md:w-[717px]  w-11/12 sm:w-auto bg-gray-100   rounded-md shadow-lg  shadow-slate-400 mt-9  p-7">
          <form method="post">
            {/* row 1 */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="ml-4 font-bold">Name</label>
                <input id="name" type="text" placeholder="Enter Your Name Here" className="h-12 p-5 border border-[#DBDFD0] rounded-full"/>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="ml-4 font-bold">Email</label>
                <input id="emil" type="email" placeholder="Enter Your Email Address Here" className="h-12 p-5 border border-[#DBDFD0] rounded-full"/>
              </div>
            </div>
            {/* row 2 */}
            <div className="flex  sm:flex-row flex-col  gap-4 mt-5 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="subject" className="ml-4 font-bold">Subject</label>
                <input id="subject" type="text" placeholder="Write a Motive Here" className="h-12 p-5 border border-[#DBDFD0] rounded-full"/>
              </div>
             
            </div>

            {/* row 3 */}
            <div className="flex  sm:flex-row flex-col gap-4 mt-5 items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="totalPerson" className="ml-4 font-bold">Total Persons</label>
                 <textarea  className="h-32 p-5 border border-[#DBDFD0] rounded-md "  placeholder="Write Your Message Here"/>
              </div>
            </div>
            <button type="submit" className="bg-[#AD343E] w-full text-white font-bold p-3 rounded-full mt-5">
              Book A Table
            </button>
          </form>
        </div>


        {/* address  */}

        <div className="h-auto  mb-9 md:w-[717px] grid sm:grid-cols-3 grid-cols-2  small:grid-cols-1  gap-3  md:justify-around  w-11/12 sm:w-auto text-[#2C2F24]   mt-10"> 
             <div>
                <h3 className="font-bold mb-2">Contact Us:</h3>
                <p className="text-[#AD343E] font-bold ">(+44) 7743 76895</p>

             </div>
             <div>
                <h3 className="font-bold mb-2">Schedule:</h3>
                <p> Mon to Fri: 11:30am - 9pm </p>
                <p>Sat, Sun: 10am - 11pm</p>
             </div>
             <div>
                <h3  className="font-bold mb-2">Our Location:</h3>
                <p>Latifabad No 8,Near Al Kitab Book Store Hyderabad Sindh.</p>
             </div>
        </div>
      </section>

     
    </main>
  );
}




