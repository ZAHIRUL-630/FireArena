document.getElementById("downloadBtn").addEventListener("click", (FireArena BD.apk) => {
  const link = document.createElement("a");
  link.href = "FireArena BD.apk";
  link.download = "FireArenaX.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert("🚀 ডাউনলোড শুরু হচ্ছে!");
});