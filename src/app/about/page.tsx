import AboutOrder from "@/app/components/aboutOrderCrouser";
import Image from "next/image";
import Comments from "../components/comments";

export default function about() {
  return (
    <main className="h-full w-full mb-9 bg-[#F9F9F7]">
      <section className=" h-auto  w-full  px-3 mt-11  flex  lg:flex-row flex-col ">
        <div className="lg:w-1/2 w-full px-4 flex justify-start  h-[250px] sm:h-[350px] ">
          <Image
            src={"/image/about/about1.png"}
            height={350}
            width={599}
            alt="healthy food"
            className="sm:h-[350px] h-[250px] object-cover w-full shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full  mt-4  md:pr-9 h-auto md:pl-9 p-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium text-[#2C2F24] font-serif">
            We Provide Organic Food for Our Customers.
          </h1>
          <p className="mt-3 font-sans  text-[#2C2F24]">{`Our journey started with a vision to craft a one-of-a-kind dining experience that blends exquisite cuisine, impeccable service, and a lively atmosphere. Deeply rooted in the rich culinary heritage of our city, we strive to celebrate local traditions while embracing a global array of flavors, creating a dynamic fusion that captivates and delights every guest.`}</p>
          <p className="mt-3 font-sans  text-[#414536]">
            At our venue, we hold the belief that dining is about much more than just the meal,
            It's about creating a complete, immersive experience. Our team, known for their genuine warmth and unwavering commitment, works tirelessly to ensure that every visit is a remarkable occasion, leaving a lasting impression on all who walk through our doors.{" "}
          </p>
        </div>
      </section>

      <section className="h-auto w-full px-3 mt-10 flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold font-serif mb-7  text-[#AD343E]">
        Experience the True, Unaltered Flavors We Have to Offer You
        </h2>
        <div className="sm:h-96 h-80 w-full mx-4  rounded-lg">
          <video
            src="/image/about/resturent-video.mp4"
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>
        <AboutOrder />
      </section>

      {/* little Information */}
      <section className="mt-14 flex flex-col md:flex-row  gap-5 ">
        <div className="md:w-2/4 w-full h-auto pt-8  px-10">
          <h2 className="sm:text-3xl text-2xl font-serif font-medium sm:text-center mb-8">
            We Give You Short Information
            <br /> For Our Esteemed Guests
          </h2>
          <p className="text-[#414536]">
          At our establishment, we see dining as more than just a meal—it's about the entire experience. Our team, celebrated for their kindness and commitment, works passionately to ensure each visit is a memorable occasion.
          </p>
          <div className="w-full h-auto grid grid-cols-2 mt-3 sm:justify-center justify-start gap-2 sm:px-12 font-serif">
            <div className="w-full h-32 shadow-lg border border-gray-200 rounded-3xl flex flex-col items-center justify-center ">
              <h3 className="sm:text-3xl text-2xl">2</h3>
              <p className="sm:text-xl text-sm">Branches</p>
            </div>
            <div className="w-full h-32 shadow-lg border border-gray-200 rounded-3xl flex flex-col items-center justify-center">
              <h3 className="sm:text-3xl text-2xl">2011</h3>
              <p className="sm:text-xl text-sm">Establish</p>
            </div>
            <div className="w-full shadow-lg h-32 border border-gray-200 rounded-3xl flex flex-col items-center justify-center">
              <h3 className="sm:text-3xl text-2xl">
                5<sub className="sm:text-4xl text-3xl">0</sub>+
              </h3>
              <p className="sm:text-xl text-sm">Founded</p>
            </div>
            <div className="w-full shadow-lg h-32 border border-gray-200 rounded-3xl flex flex-col items-center justify-center">
              <h3 className="sm:text-3xl text-2xl">80%</h3>
              <p className="sm:text-xl text-sm text-center">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/4 w-full h-auto  px-7 md:h-[500px]  sm:h-[300px]">
          <Image
            src={"/image/about/about-2.png"}
            width={555}
            height={450}
            alt="resturent"
            className="w-full md:h-[500px] object-cover  sm:h-[300px] shadow-md"
          />
        </div>
      </section>

      {/* comments */}
      <section>
        <h2 className="sm:text-3xl text-2xl font-serif font-medium text-center mt-12 my-7">
          Customer FeedBack
        </h2>
        <Comments />
      </section>
    </main>
  );
}
