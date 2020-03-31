import { LoadAndGetPDF } from "../Helper/Report";
import { Request, Response } from "express";

export async function FirstAgm(request: Request, response: Response) {
    let data = await LoadAndGetPDF("FirstAGMHC");
    response.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="filename.pdf"'
    });

    const download = Buffer.from(data.toString('utf-8'), 'base64');

    response.end(download);
} 
