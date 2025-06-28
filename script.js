document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "FireArenaX.apk";
  link.download = "FireArenaX.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert("🚀 ডাউনলোড শুরু হচ্ছে!");
});