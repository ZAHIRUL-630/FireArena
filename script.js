document.getElementById("FireArena BD.apk").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "FireArena BD.apk"; // Ensure this file exists in your folder
  link.download = "FireArena BD.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("📦 অ্যাপ ডাউনলোড শুরু হচ্ছে...");
});