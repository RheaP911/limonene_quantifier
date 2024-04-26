// Show Form in File Upload
document.getElementById("uploadBtn").addEventListener("click", function() {
    var form = document.getElementById("uploadForm");
    if (form.style.display == "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});


// Show Upload Success
const fileInput = document.getElementById('file');
const fileUploadLabel = document.getElementById('fileUploadLabel');

fileUploadLabel.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUploadLabel.classList.add('dragover');
});

fileUploadLabel.addEventListener('dragleave', () => {
    fileUploadLabel.classList.remove('dragover');
});

fileUploadLabel.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUploadLabel.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        // You can trigger file upload here
        // For example, submit the form
        // document.getElementById('uploadForm').submit();
        uploadImage();
    }
});

// Optional: Handle file selection via input file change event
fileInput.addEventListener('change', () => {
    // You can trigger file upload here
    // For example, submit the form
    // document.getElementById('uploadForm').submit();
    uploadImage();
});





function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}