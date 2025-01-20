import { LegacyClient } from "osu-web.js";
import { errorHandling } from "./errorHandling";

export async function beatmapDetailFetch(beatmapId: number): Promise<
  | {
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
  | undefined
> {
  const LegacyApi = new LegacyClient(process.env.OSU_API_KEY as string);
  try {
    const beatmapDetail = await LegacyApi.getBeatmaps({
      b: beatmapId,
    });
    return {
      set_id: beatmapDetail[0].beatmapset_id,
      artist: beatmapDetail[0].artist,
      title: beatmapDetail[0].title,
      diff_name: beatmapDetail[0].version,
      star_rating: beatmapDetail[0].difficultyrating,
      bpm: beatmapDetail[0].bpm,
      drain: beatmapDetail[0].diff_drain,
      cs: beatmapDetail[0].diff_size,
      ar: beatmapDetail[0].diff_approach,
      od: beatmapDetail[0].diff_overall,
      length: beatmapDetail[0].total_length,
    };
  } catch (error) {
    errorHandling(error);
  }
}
