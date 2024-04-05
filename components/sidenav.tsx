import Image from "next/image";
import Link from "next/link";
import tvf from '@/public/channels1_profile.jpg';
import dhruvrathee from '@/public/channels2_profile.jpg';
import angryprash from '@/public/channels3_profile.jpg';

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
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";

export default function SideNav() {
    return (
        <div className="sideNav text-white bg-black">
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><RiHome4Fill className="text-white size-6 w-6 mx-4" />Home</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><SiYoutubeshorts className="text-white size-5 w-6 mx-4" />Shorts</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdSubscriptions className="text-white size-5 w-6 mx-4" />Subscriptions</span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-11/12 text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><LuUserSquare className="text-white size-5 w-6 mx-4" />Your Channel</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><RiHistoryLine className="text-white size-5 w-6 mx-4" />History</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdPlaylistPlay className="text-white size-6 w-6 mx-4" />Playlist</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><RiVideoLine className="text-white size-5 w-6 mx-4" />Your Videos</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdWatchLater className="text-white size-5 w-6 mx-4" />Watch Later</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><AiFillLike className="text-white size-5 w-6 mx-4" />Liked Videos</span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><p className="text-white self-center mx-4 w-5">Subscriptions</p></span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><Image src={tvf} alt="TVF" className="size-6 rounded-xl mx-4" /><p>The Viral Fever</p></span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><Image src={angryprash} alt="AP" className="size-6 rounded-xl mx-4" /><p>Angry Prash</p></span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><Image src={dhruvrathee} alt="DR" className="size-6 rounded-xl mx-4" /><p>Dhruv Rathee</p></span>
                <span className="w56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><IoIosArrowDown className="text-white size-5 w-6 mx-4" /><p className="text-sm">Show 106 more</p></span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><IoSettingsOutline className="text-white size-5 w-6 mx-4" />Settings</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdOutlinedFlag className="text-white size-5 w-6 mx-4" />Report History</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><FaQuestion className="text-white size-5 w-6 mx-4" />Help</span>
                <span className="w-56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><MdFeedback className="text-white size-5 w-6 mx-4" />Send Feedback</span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3 w-56">
                <div className="linksSec flex flex-wrap gap-1 mx-1">
                    <span className="text-xs px-3 py-1 rounded-xl hover:bg-gray-900"><Link href={""}>About</Link></span>
                    <span className="text-xs px-3 py-1 rounded-xl hover:bg-gray-900"><Link href={""}>Press</Link></span>
                    <span className="text-xs px-3 py-1 rounded-xl hover:bg-gray-900"><Link href={""}>Copyright</Link></span>
                    <span className="text-xs px-3 py-1 rounded-xl hover:bg-gray-900"><Link href={""}>Contacts Us</Link></span>
                    <span className="text-xs px-3 py-1 rounded-xl hover:bg-gray-900"><Link href={""}>Developers</Link></span>
                </div>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3 w-56">
                <span className="text-xs px-3 py-1 rounded-xl">
                    <p className="">
                        This is copyright section. This is completely copied from Youtube, Google Inc, and Alphabet Inc.
                    </p>
                </span>
            </div>
        </div>
    )
}