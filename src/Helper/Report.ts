var Stimulsoft = require('stimulsoft-reports-js');


export async function LoadAndGetPDF(ReportMRTName: string): Promise<any> {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile(process.cwd() + "\\bin\\Reports\\" + ReportMRTName + ".mrt");
    var data = "";
    await GetReport(report).then((res: string) => {
        data = res;
    });
    return data;
}
async function GetReport(report: any) {
    var promise = await new Promise((resolve) => {
        report.renderAsync(() => {
            report.exportDocumentAsync((pdfData) => {
                var bytearray = Stimulsoft.System.Convert.toBase64String(pdfData);
                resolve(bytearray);
            }, Stimulsoft.Report.StiExportFormat.Pdf);
            // var data = report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);
            // var bytearray = Stimulsoft.System.Convert.toBase64String(data);
            // var settings = new Stimulsoft.Report.Export.StiPdfExportSettings();
            // var service = new Stimulsoft.Report.Export.StiPdfExportService();
            // var stream = new Stimulsoft.System.IO.MemoryStream();
            // service.exportTo(report, stream, settings);
            // var data = stream.toArray();

        });
    });
    return promise;
}
