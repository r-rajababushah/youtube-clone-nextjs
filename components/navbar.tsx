import Link from "next/link";
import Image from "next/image";
import profile from '@/public/profile.jpg';

import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function NavBar() {
    return (
        <div>
            <nav className="upperNav flex flex-row justify-between items-center bg-black w-full h-12 fixed">
                <div className="firstSec flex flex-row justify-center items-center gap-2 ml-5 cursor-pointer">
                    <Link href={""}><GiHamburgerMenu className="text-white text-2xl" /></Link>
                    <Link href={""}><ImYoutube2 className="text-pink-500 text-7xl h-7" /></Link>
                </div>
                <div className="secSec flex flex-row justify-between items-center w-150">
                    <div className="searchInput flex flex-row justify-between items-center border-collapse cursor-pointer">
                        <input type="text" className="text-white w-128 h-8 rounded-l-2xl border border-pink-500 bg-black outline-none px-5" placeholder="Youtube Search..."/>
                        <FaSearch className="text-white p-1 rounded-r-2xl border border-pink-500 h-8 w-8" />
                    </div>
                    <div className="voiceSearch cursor-pointer">
                        <MdKeyboardVoice className="size-9 text-white p-1 ml-5 rounded-2xl border border-pink-500" />
                    </div>
                </div>
                <div className="thiSec flex flex-row items-center mr-4 cursor-pointer">
                    <MdOutlineVideoCall className="size-7 text-white mr-3" />
                    <IoIosNotificationsOutline className="size-7 text-white mr-3" />
                    <Image src={profile} className="size-7 rounded-xl mr-3" alt="#" />
                </div>
            </nav>
        </div >
    )
}