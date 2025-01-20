import path from "path";
import { beatmapDetailFetch } from "./beatmapDetailFetch";
import fsPromises from 'fs/promises';
interface beatmapDetails {
    beatmapId: number;
    mods: string;
    beatmapDetails?: {
        set_id: number;
        artist: string;
        title: string;
        diff_name: string;
        star_rating: number;
        bpm: number;
        drain: number;
        cs: number;
        ar: number;
        od: number;
        length: number;
    }
}
interface beatmap {
    beatmapId: number;
    mods: string;
}
export async function beatmapListFetch() {
    try {
        const filePath = path.join(process.cwd(), './src/app/data/beatmaps.json');
        const response = await fsPromises.readFile(filePath);
        const beatmapData: beatmap[] = JSON.parse(response.toString());
        const beatmapList: beatmapDetails[] = await Promise.all(beatmapData.map(async (data) => ({
            ...data,
            beatmapDetails: await beatmapDetailFetch(data.beatmapId),
          })));
        return beatmapList;
    }
    catch (error) {
        console.error(error);
    }
}