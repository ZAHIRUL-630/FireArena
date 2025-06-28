document.getElementById('downloadBtn').addEventListener('click', function() {

    const appUrl = 'https://pay.netpaybd.com/NetPayBD.apk';
    
   
    const link = document.createElement('a');
    link.href = appUrl;
    link.download = 'FreeFireTournament.apk';
    

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    

    alert('ডাউনলোড শুরু হচ্ছে...');
});
