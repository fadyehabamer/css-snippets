let qrdata = document.getElementById("qrdata"),
    qrCode = new QRCode(document.getElementById("qrcode"));


function generateQR (){
   let data = qrdata.value
   qrCode.makeCode(data)
}