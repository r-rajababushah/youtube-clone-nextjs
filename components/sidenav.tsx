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
                <span className="sideNavNItems"><RiHome4Fill className="sideNavIcos" />Home</span>
                <span className="sideNavNItems"><SiYoutubeshorts className="sideNavIcos" />Shorts</span>
                <span className="sideNavNItems"><MdSubscriptions className="sideNavIcos" />Subscriptions</span>
                <span className="sideNavHr"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="sideNavNItems"><LuUserSquare className="sideNavIcos" />Your Channel</span>
                <span className="sideNavNItems"><RiHistoryLine className="sideNavIcos" />History</span>
                <span className="sideNavNItems"><MdPlaylistPlay className="sideNavIcos" />Playlist</span>
                <span className="sideNavNItems"><RiVideoLine className="sideNavIcos" />Your Videos</span>
                <span className="sideNavNItems"><MdWatchLater className="sideNavIcos" />Watch Later</span>
                <span className="sideNavNItems"><AiFillLike className="sideNavIcos" />Liked Videos</span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="sideNavNItems"><p className="text-white self-center mx-4 w-5">Subscriptions</p></span>
                <span className="sideNavNItems"><Image src={tvf} alt="TVF" className="size-6 rounded-xl mx-4" /><p>The Viral Fever</p></span>
                <span className="sideNavNItems"><Image src={angryprash} alt="AP" className="size-6 rounded-xl mx-4" /><p>Angry Prash</p></span>
                <span className="sideNavNItems"><Image src={dhruvrathee} alt="DR" className="size-6 rounded-xl mx-4" /><p>Dhruv Rathee</p></span>
                <span className="w56 flex items-center mx-1 py-2 rounded-xl hover:bg-gray-900"><IoIosArrowDown className="text-white size-5 w-6 mx-4" /><p className="text-sm">Show 106 more</p></span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3">
                <span className="sideNavNItems"><IoSettingsOutline className="sideNavIcos" />Settings</span>
                <span className="sideNavNItems"><MdOutlinedFlag className="sideNavIcos" />Report History</span>
                <span className="sideNavNItems"><FaQuestion className="sideNavIcos" />Help</span>
                <span className="sideNavNItems"><MdFeedback className="sideNavIcos" />Send Feedback</span>
                <span className="w-56 flex items-center mx-1 py-2 justify-center cursor-default"><hr className="w-full text-white" /></span>
            </div>
            <div className="flex flex-col gap-1 cursor-pointer ml-1 mr-3 w-56">
                <div className="linksSec flex flex-wrap gap-1 mx-1">
                    <span className="sideNavEtx"><Link href={""}>About</Link></span>
                    <span className="sideNavEtx"><Link href={""}>Press</Link></span>
                    <span className="sideNavEtx"><Link href={""}>Copyright</Link></span>
                    <span className="sideNavEtx"><Link href={""}>Contacts Us</Link></span>
                    <span className="sideNavEtx"><Link href={""}>Developers</Link></span>
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