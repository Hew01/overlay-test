import { GoogleSpreadsheet } from "google-spreadsheet";

interface MappoolRound {
    roundName: string,
    beatmapList: {
        mod_pick: string;
        map_name: string;
        // star_rating: string;
        // bpm: number;
        // length: number;
        // cs: number;
        // ar: number;
        // od: number;
        // mapper: string;
        // set_id: number;
        map_id: number;
    } [];
}

export async function beatmapSheetFetch(spreadsheetId: string, sheetId: number) {
    try {
        const sheet = new GoogleSpreadsheet(spreadsheetId, {apiKey: process.env.GOOGLE_API_KEY ?? ''});
        await sheet.loadInfo();
        const mappoolSheet = sheet.sheetsById[sheetId];
        const sheetBeatmapLists = await mappoolSheet.getRows();
        const mappoolRound: MappoolRound[] = [];
        for (let index = 0; index < sheetBeatmapLists.length; index++) {
            const roundName: string = sheetBeatmapLists[index].get('Round');
            const existingMapRound = mappoolRound.find((beatmapList) => beatmapList.roundName == roundName);
            if (existingMapRound) {
                existingMapRound.beatmapList.push({
                    mod_pick: sheetBeatmapLists[index].get('Pick'),
                    map_name: sheetBeatmapLists[index].get('Map Text'),
                    // star_rating: sheetBeatmapLists[index].get('sr'),
                    // bpm: sheetBeatmapLists[index].get('bpm'),
                    // length: sheetBeatmapLists[index].get('length'),
                    // cs: sheetBeatmapLists[index].get('cs'),
                    // ar: sheetBeatmapLists[index].get('ar'),
                    // od: sheetBeatmapLists[index].get('od'),
                    // mapper: sheetBeatmapLists[index].get('mapper'),
                    // set_id: sheetBeatmapLists[index].get('set_id'),
                    map_id: sheetBeatmapLists[index].get('Map ID')
                });
            } else {
                const newBeatmapList: MappoolRound = {
                    roundName: roundName,
                    beatmapList: [
                        {
                            mod_pick: sheetBeatmapLists[index].get('Pick'),
                            map_name: sheetBeatmapLists[index].get('Map ID'),
                            // star_rating: sheetBeatmapLists[index].get('sr'),
                            // bpm: sheetBeatmapLists[index].get('bpm'),
                            // length: sheetBeatmapLists[index].get('length'),
                            // cs: sheetBeatmapLists[index].get('cs'),
                            // ar: sheetBeatmapLists[index].get('ar'),
                            // od: sheetBeatmapLists[index].get('od'),
                            // mapper: sheetBeatmapLists[index].get('mapper'),
                            // set_id: sheetBeatmapLists[index].get('set_id'),
                            map_id: sheetBeatmapLists[index].get('Map ID'),
                        }
                    ]
                };
                mappoolRound.push(newBeatmapList);
            }
        }
        return mappoolRound;
    } catch (error) {   
        console.error(error);
    }
}