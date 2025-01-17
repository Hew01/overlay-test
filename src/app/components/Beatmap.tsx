

interface beatmap {
    mods: string;
    beatmapID: number;
    layerName: string;
}

export default function Beatmap({ mods, beatmapID, layerName }: beatmap) {
    return <div>{layerName}</div>;
}