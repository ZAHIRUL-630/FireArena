document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "FireArenaBD.apk"; // Ensure this file exists in your folder
  link.download = "FireArenaBD.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("📦 অ্যাপ ডাউনলোড শুরু হচ্ছে...");
});