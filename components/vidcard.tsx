import Image from "next/image"

export default function VidCard({ imgUrl, altTxt, chnlUrl, vidTitle, chnlNme, viewsN, uploadDte, vidDur }: { imgUrl: any, altTxt: string, chnlUrl: any, vidTitle: string, chnlNme: string, viewsN: string, uploadDte: string, vidDur: string }) {
    return (
        <div className="cursor-pointer rounded-3xl flex flex-col items-center justify-center pb-2">
            <div className="imgS">
                <p className="text-white relative top-[190px] left-[265px] bg-black w-fit rounded-md px-1 ">{vidDur}</p>
                <Image src={imgUrl} alt={altTxt} className="h-48 w-80 rounded-xl" />
            </div>
            <div className="desS pt-3 flex justify-between">
                <div className="chnlLogo">
                    <Image src={chnlUrl} alt={altTxt} className="size-10 rounded-2xl" />
                </div>
                <div className="chnlTitle pl-4 max-w-72">
                    <p className="text-white text-lg">{vidTitle}</p>
                    <p className="text-slate-500 text-md">{chnlNme}</p>
                    <div className="vidDta flex gap-3">
                        <p className="text-slate-500 text-sm">{viewsN}</p> 
                        <p className="text-slate-500 text-sm">▪</p>
                        <p className="text-slate-500 text-sm">{uploadDte}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}