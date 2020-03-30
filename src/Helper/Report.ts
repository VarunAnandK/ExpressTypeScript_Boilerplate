var Stimulsoft = require('stimulsoft-reports-js');

export async function LoadAndGetPDF(ReportMRTName: string): Promise<any> {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile(process.cwd() + "\\build\\Reports\\" + ReportMRTName);
    report.renderAsync(function () {
        var pdfData = report.exportDocument(Stimulsoft.Report.StiExportFormat.Pdf);
    });
    return "";
} 