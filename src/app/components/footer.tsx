import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <main className="h-auto w-full  bg-red-900 p-20 pb-0">
      <section className="grid  sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-0 justify-around">
        <div className="grid gap-6 justify-center items-center h-auto mb-14">
          <div className="flex gap-3 items-center">
            <Image src={"/image/footerlogo.jpg"} height={40} width={40} alt="logo" />{" "}
            <h4 className="font-serif font-medium  text-white  text-xl">
           
              Al Fajar Foods
            </h4>
          </div>
          <p className="text-white">
          In the age of innovation, we embrace transformation.
          <br />
          With confidence and pride, we look toward the future <br /> For our organization
          and beyond.
          </p>
          <div className="flex  gap-3">
            <div className="rounded-full p-2 h-8 w-8 text-center bg-black  text-white">
              <FaTwitter />{" "}
            </div>
            <div className="rounded-full p-2 h-8 w-8 bg-black text-white">
              {" "}
              <FaFacebookF />
            </div>
            <div className="rounded-full p-2 h-8 w-8 bg-black text-white">
              {" "}
              <FaSquareInstagram />
            </div>
            <div className="rounded-full p-2 h-8 w-8 bg-black text-white">
              {" "}
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="sm:ml-9 grid justify-center items-center ">
          <h4 className="text-white font-bold mb-2  ">Sections</h4>
          <div className="text-white  grid gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/menue"}>Menu</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/book"}>Book Table</Link>
          </div>
        </div>

        <div className="grid justify-center items-center  ml-6 sm:ml-0">
          <h4 className="text-white font-bold mb-3 ">Essential Pages</h4>
          <div className="text-white  grid gap-5">
            <p>Begin Here</p>
            <p>Brand Guidelines</p>
            <p>3D Security</p>
            <p>Permissions</p>
            <p>Update Log</p>
            <p>View More</p>
          </div>
        </div>

        <div className="grid justify-center">
          <h4 className="text-white font-bold mb-5 ">Follow Our Social Media Platforms</h4>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src={"/image/footer/pick1.jpg"}
              height={170}
              width={194}
              alt="follw"
            />
            <Image
              src={"/image/footer/pick2.jpg"}
              height={170}
              width={194}
              alt="follw"
            />
            <Image
              src={"/image/footer/pick3.png"}
              height={170}
              width={194}
              alt="follw"
            />
            <Image
              src={"/image/footer/pick4.png"}
              height={170}
              width={194}
              alt="follw"
            />
          </div>
        </div>
      </section>
      <section >
        <p className="text-white text-center mt-16 pb-9"> © 2025 Al Fajar Foods All Rights Reserved.</p>
      </section>
    </main>
  );
}

export default Footer;
