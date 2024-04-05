import Image from "next/image";
import Link from "next/link";
import tvf from '@/public/channels1_profile.jpg';
import dhruvrathee from '@/public/channels2_profile.jpg';
import angryprash from '@/public/channels3_profile.jpg';

import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { RiHome4Fill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { LuUserSquare } from "react-icons/lu";
import { RiHistoryLine } from "react-icons/ri";
import { MdPlaylistPlay } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export default function SideNav() {
    return (
        <div className="relative top-12">
            <div className="sideNav text-white w-1/6 bg-black">
                {/* <div className="flex flex-row items-center gap-2 ml-5 cursor-pointer">
                    <Link href={""}><GiHamburgerMenu className="text-white text-2xl" /></Link>
                    <Link href={""}><ImYoutube2 className="text-pink-500 text-7xl h-7" /></Link>
                </div> */}
                <div className="flex flex-col gap-1 cursor-pointer pt-5">
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><RiHome4Fill className="text-white size-6 w-6 mx-4" />Home</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><SiYoutubeshorts className="text-white size-5 w-6 mx-4" />Shorts</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdSubscriptions className="text-white size-5 w-6 mx-4" />Subscriptions</span>
                    <span className="flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-11/12 text-white" /></span>
                </div>
                <div className="flex flex-col gap-1 cursor-pointer">
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><LuUserSquare className="text-white size-5 w-6 mx-4" />Your Channel</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><RiHistoryLine className="text-white size-5 w-6 mx-4" />History</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdPlaylistPlay className="text-white size-6 w-6 mx-4" />Playlist</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><RiVideoLine className="text-white size-5 w-6 mx-4" />Your Videos</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdWatchLater className="text-white size-5 w-6 mx-4" />Watch Later</span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><AiFillLike className="text-white size-5 w-6 mx-4" />Liked Videos</span>
                    <span className="flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
                </div>
                <div className="flex flex-col gap-1 cursor-pointer">
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900 w-2/3"><p className="text-white self-center mx-4 w-5">Subscriptions</p></span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><Image src={tvf} alt="TVF" className="size-6 rounded-xl mx-4" /><p>The Viral Fever</p></span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><Image src={angryprash} alt="AP" className="size-6 rounded-xl mx-4" /><p>Angry Prash</p></span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><Image src={dhruvrathee} alt="DR" className="size-6 rounded-xl mx-4" /><p>Dhruv Rathee</p></span>
                    <span className="flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><IoIosArrowDown className="text-white size-5 w-6 mx-4" /><p className="text-sm">Show 106 more</p></span>
                </div>
            </div>
        </div>
    )
}