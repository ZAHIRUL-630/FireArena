document.getElementById('downloadBtn').addEventListener('click', function() {

    const appUrl = 'FireArena BD.apk';
    
   
    const link = document.createElement('a');
    link.href = appUrl;
    link.download = 'FireArena BD.apk';
    

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    

    alert('ডাউনলোড শুরু হচ্ছে...');
});
