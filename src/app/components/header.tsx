'use client'
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaCartArrowDown } from "react-icons/fa";



function Header() {
  const activeLink = usePathname()

  return (
    <main className="flex flex-col overflow-x-hidden" >
      {/* header1 */}
      <section className="h-11 w-full bg-red-900 gap-1 text-white flex justify-between px-8 items-center">
        <div className="mr-1 flex flex-col md:flex-row md:gap-2  text-[12px] md:text-sm lg:text-sm">
          <p>(+44) (7743) 768695</p>
          <p>osamashiekh@gmail.com</p>
        </div>
        <div className="flex gap-1">
          <div className="rounded-full p-1 bg-black"><FaTwitter /> </div>
          <div className="rounded-full p-1 bg-black"> <FaFacebookF /></div>
          <div className="rounded-full p-1 bg-black" > <MdOutlineEmail /></div>
          <div className="rounded-full p-1 bg-black"> <FaGithub /></div>
        </div>
      </section>
      {/* header 2 */}
      <section className="h-14 w-full flex justify-between text-[#474747]  items-center px-5 sm:px-10" >
        <div className="flex items-center gap-2">
       <Image src={'/logo.jpg'} width={32} height={32} alt="logo" className="h-8 w-10" /><p className='text-2xl font-serif font-semibold mt-2'><i> Al Fajar Foods </i></p>
        </div>

        <nav className="sm:hidden hidden lg:block md:block">
          <Link href={'/'} className={`mr-4 ${activeLink == "/" ? "bg-[#DBDFD0] py-1 px-3 rounded-full text-sm" : ""}`}>Home</Link>
          <Link href={'/about'} className={`mr-4 ${activeLink == "/about" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} > About</Link>
          <Link href={'/menue'} className={`mr-4 ${activeLink == "/menue" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} >Menu</Link>

          <Link href={'/contact'} className={`mr-4 ${activeLink == "/contact" ? "bg-[#DBDFD0] py-1 px-3  rounded-full text-sm" : ""}`} >Contact</Link>
        </nav>
        <div className="flex items-center gap-3  "> 
        <Button asChild variant="outline" className="rounded-full  hidden sm:hidden bg-red-900  md:block text-white hover:bg-[#DBDFD0] h-10">
          <Link href="/book">Book Table</Link>
        </Button> 
        <Link href={'/cart'}><FaCartArrowDown className="text-black  hidden sm:hidden   md:block text-3xl"/> </Link>
        </div>    
        <Sheet   >
        < SheetTrigger asChild  >
        <Button
      variant="outline"
      className="sm:block  font-bold border-none text-5xl md:hidden lg:hidden text-center flex items-center justify-center"
    >
      <IoMdMenu className="text-4xl" /> {/* Increase icon size here */}
    </Button>
            {/* <Button variant="outline" className='sm:block h-8 w-8 font-bold border-none text-7xl md:hidden lg:hidden text-center' ><IoMdMenu /></Button> */}
          </SheetTrigger> 
          <SheetContent className="bg-[#AD343E] opacity-90 text-white">
            <SheetHeader >
              <SheetTitle className="flex justify-center gap-2 mt-8" >  <Image src={'/image/footerlogo.png'} width={32} height={32} alt="logo" className="h-8 w-10 " /> <p className="text-3xl  text-white"> Bistro Bliss </p></SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-5 text-2xl mt-16 ">
              <Link href={'/'} className={`mr-4 self-center`}>Home</Link>
              <Link href={'/about'} className={`mr-4 self-center`} >About</Link>
              <Link href={'/menue'} className={`mr-4  self-center`} >Menu</Link>
          
              <Link href={'/contact'} className={`mr-4  self-center`} >Contact</Link>
              <Link href={'/book'} className={`mr-4  self-center`} >Reserve Table</Link>
              <Link href={'/cart'} className={`mr-4  self-center`} >Cart</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </section>
    </main>
  );
}

export default Header;
