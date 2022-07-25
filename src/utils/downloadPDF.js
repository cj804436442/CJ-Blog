// 导出页面为PDF格式
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";
export function downloadPDF(ele, pdfName) {
  let eleW = ele.offsetWidth;
  let eleH = ele.offsetHeight;
  let eleOffsetTop = ele.offsetTop;
  let eleOffsetLeft = ele.offsetLeft;
  var canvas = document.createElement("canvas");
  var abs = 0;
  let win_in =
    document.documentElement.clientWidth || document.body.clientWidth;
  let win_out = window.innerWidth;
  if (win_out > win_in) {
    abs = (win_out - win_in) / 2;
  }
  canvas.width = eleW * 2;
  canvas.height = eleH * 2;
  var context = canvas.getContext("2d");
  context.scale(2, 2);
  context.translate(-eleOffsetLeft - abs, -eleOffsetTop);
  html2Canvas(ele, {
    dpi: 300,
    useCORS: true
  }).then(canvas => {
    var contentWidth = canvas.width;
    var contentHeight = canvas.height;
    var pageHeight = (contentWidth / 592.28) * 841.89;
    var leftHeight = contentHeight;
    var position = 0;
    var imgWith = 595.28;
    var imgHeight = 595.28 / contentWidth + contentHeight;
    var pageData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new JsPDF("", "pt", "a4");
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, "JPEG", 0, 0, imgWith, imgHeight);
    } else {
      while (leftHeight > 0) {
        pdf.addImage(pageData, "JPEG", 0, position, imgWith, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        if (leftHeight > 0) {
          pdf.addPage();
        }
      }
    }
    pdf.save(pdfName);
  });
}
