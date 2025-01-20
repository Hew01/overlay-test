export default function Team(direction: string, color: string, directionShort: string, directionFlow: string) {
    return (
        <div id="container" className={`flex flex-col justify-start items-${directionFlow} gap-2 absolute ${direction}-0 inset-y-4 border-4 rounded-lg border-${color}-600 bg-${color}-300 px-2 m${directionShort}-2 w-80 h-96`}>
            <div id="teamName" className={`py-2 px-4 bg-red-800 font-torus font-bold text-2xl text-${color}-300 text-white uppercase`}>Team ${color}</div>
            <div id="teamMembers" className="flex flex-row gap-4 ">
                <div id="avatar" className="rounded-full flex-none w-20 bg-black"/>
                <div id="playerName" className="flex-1">Atake</div>
            </div>
            <div className="text-red-700 text-3xl font-torus">BANS:</div>
            <div className=""></div>
        </div>
    );
}