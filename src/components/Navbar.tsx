import Image from "next/image"
import Link from "next/link"

import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
    <Link className="flex justify-center items-center" href='/'>
        <Image 
            alt="Car Hub Logo"
            className="object-contain"
            height={18}
            src='/logo.svg'
            width={118}
        />
    </Link>

    <CustomButton 
        btnType='button'
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        title="Sign In"
    />
        </nav>
    </header>
  )
}

export default Navbar