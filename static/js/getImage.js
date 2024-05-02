// Show Form in File Upload
document.getElementById("uploadBtn").addEventListener("click", function() {
    var form = document.getElementById("uploadForm");
    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});
