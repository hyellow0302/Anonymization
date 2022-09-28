import React, {useRef} from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

function htmlToFile(file) {
    var header = "<html>"+
        "<head><meta charset='utf-8'></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header+document.getElementById("dataTable").value+footer;
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Testfile.'+file;
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

export default htmlToFile;