import { download, generateCsv, mkConfig } from "export-to-csv";
const exportData = ({
    res,
    headers,
    mapFunction,
    fileName,
    awaitRes,
}: {
    res: any;
    headers: string[];
    mapFunction: (item: any) => any[];
    fileName: string;
    awaitRes?: boolean;
}) => {
    return {
        exportExcel: async () => {
            if (awaitRes) res = await res;
            const csvConfig = mkConfig({
                useKeysAsHeaders: true,
                filename: fileName,
            });
            const items = res.items.map(mapFunction);
            const result = items.map((item: any, i) => {
                const obj = {};

                headers.map((header, i) => {
                    obj[header] = item[i];
                });

                return obj;
            });

            const csv = generateCsv(csvConfig)(result);
            download(csvConfig)(csv);
        },
        exportPDF: async () => {
            if (awaitRes) res = await res;
            const doc = new jsPDF();
            doc.setFontSize(16);
            const tableData = res.items.map(mapFunction);
            // @ts-ignore
            doc.autoTable({
                head: [headers],
                body: tableData,
                startY: 10,
                styles: {
                    fontSize: 10,
                    cellPadding: 3,
                    overflow: "linebreak",
                    halign: "left",
                    valign: "middle",
                    lineWidth: 0.1,
                    lineColor: [0, 0, 0],
                },
                headStyles: {
                    fontSize: 11,
                    fontStyle: "bold",
                },
                alternateRowStyles: {
                    fillColor: [248, 248, 248],
                },
            });
            doc.save(`${fileName}.pdf`);
        },
    };
};
export {
    exportData,
};