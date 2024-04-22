
// File Upload
document.getElementById("uploadBtn").addEventListener("click", function() {
    var form = document.getElementById("uploadForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});


const fileInput = document.getElementById('file');
const fileUploadLabel = document.getElementById('fileUploadLabel');
const uploadModal = document.getElementById('uploadModal');
const closeBtn = uploadModal.querySelector('.close');

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
        document.getElementById('uploadForm').submit();
        showUploadModal();
    }
});

// Optional: Handle file selection via input file change event
fileInput.addEventListener('change', () => {
    // You can trigger file upload here
    // For example, submit the form
    document.getElementById('uploadForm').submit();
    showUploadModal();
});

function showUploadModal() {
    uploadModal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    uploadModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == uploadModal) {
        uploadModal.style.display = 'none';
    }
});

