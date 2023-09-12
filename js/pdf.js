$('#mycv').on('click', function () {
    $('.wrap, a').removeClass('active');
    $(this).addClass('active');
    const pdfUrl = './file/alessandro_lamattina.pdf';
    const pdfContainer = document.getElementById('pdfViewer');
  
    // Carica il PDF utilizzando PDF.js
    pdfjsLib.getDocument(pdfUrl).then(function (pdfDocument) {
      // Inizia a visualizzare la prima pagina del PDF
      pdfDocument.getPage(1).then(function (pdfPage) {
        const pdfViewport = pdfPage.getViewport({ scale: 1.0 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = pdfViewport.width;
        canvas.height = pdfViewport.height;
        pdfPage.render({ canvasContext: context, viewport: pdfViewport });
        pdfContainer.innerHTML = '';
        pdfContainer.appendChild(canvas);
      });
    });
  
    return false; // Impedisce al link di eseguire la navigazione normale
  });