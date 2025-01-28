import Image from "next/image";
import src from "@@/public/image.jpg";

export default function TeamContents() {
    return (
        <div id="container" className={"right-0"}>
        <div id="redTeamContainer" className={`flex flex-col justify-start gap-2 absolute inset-y-4 border-4 rounded-lg border-red-600 ml-2 w-80 h-96`}>
            <div id="teamName" className={`text-right py-2 px-4 bg-red-800 font-torus font-normal text-2xl font-bold uppercase`}>Red Team</div>
            <div id="teamDetailsContainer" className="px-4">
                <div id="teamMembers" className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <Image src={src} alt="" id="avatar" className="rounded-full flex-none w-6 bg-black" />
                            <div id="playerName" className="flex-1 font-baloo">Atake</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src={src} alt="" id="avatar" className="rounded-full flex-none w-6 bg-black" />
                            <div id="playerName" className="flex-1 font-baloo">Atake</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <Image src={src} alt="" id="avatar" className="rounded-full flex-none w-6 bg-black" />
                            <div id="playerName" className="flex-1 font-baloo">_Casiofx580vn</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src={src} alt="" id="avatar" className="rounded-full flex-none w-6 bg-black" />
                            <div id="playerName" className="flex-1 font-baloo">Atake</div>
                        </div>
                    </div>
                </div>
                <div className="text-red-500 text-2xl font-semibold font-torus pt-2">Bans:</div>
            </div>
        </div>
        </div>
    );
}