import axios from "axios";
import { beatmapDetailFetch } from "./beatmapDetailFetch";
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
        const response = await axios.get('../data/beatmaps.json');
        const beatmapData: beatmap[] = response.data;
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