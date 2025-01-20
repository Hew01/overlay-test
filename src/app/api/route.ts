import { beatmapListFetch } from "../lib/beatmapListFetch";
import { beatmapSheetFetch } from "../lib/beatmapSheetFetch";

export async function GET() {
    // const spreadsheetId = '1_YFuiVELCHdjEH4m6iw3l9Q2LhPQxPitgTxv8M46sp8';
    // const sheetId = 2040612691
    // try {
    //     const res = await beatmapSheetFetch(spreadsheetId, sheetId);
    //     return Response.json(res);
    // }
    // catch (error: any) {
    //     return Response.json({ error: error.message });
    // }
    try {
        const res = await beatmapListFetch();
        return Response.json(res);
    }
    catch (error: any) {
        return Response.json({ error: error.message });
    }
}