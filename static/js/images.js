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
        document.getElementById('uploadForm').submit();
        showUploadSuccess();
    }
});

// Optional: Handle file selection via input file change event
fileInput.addEventListener('change', () => {
    // You can trigger file upload here
    // For example, submit the form
    document.getElementById('uploadForm').submit();
    showUploadSuccess();
});


function showUploadSuccess() {
    const uploadIcon = document.querySelector(".bx-upload");
    const successIcon = document.querySelector(".bx-check");
    const uploadDiv = document.querySelector("#uploadBtn");
    const form = document.querySelector("#uploadForm");
    var iconText = document.querySelector('.text');

    // Display success icon
    uploadIcon.style.display = 'none';
    successIcon.style.display = 'block';
    uploadDiv.style.background = '#5D87FF';
    uploadDiv.style.color = '#F9F9F9';
    form.style.display = 'none';

    iconText.textContent = 'Success';



    // Change the text to "Success"

    // Set timeout to revert back to the original state after 2 seconds
    setTimeout(function() {
        // Display upload icon and hide success icon
        uploadIcon.style.display = 'block';
        successIcon.style.display = 'none';
        uploadDiv.style.background = '#F9F9F9';
        uploadDiv.style.color = '#5D87FF';

        iconText.textContent = 'Upload Image';



    }, 2000); // Timeout set to 2 seconds (2000 milliseconds)

    // alert("Submitted.")

}

function uploadImage() {
    $.ajax({
        method: "POST",
        url: "api/addimage",
        data: {
            "imageUploaded": $("#file").val(),
        },
        success: function (test) {
            localStorage.setItem("imageUploaded", JSON.stringify(data))
        }

        
    })
}

// localStorage.setItem("imageUploaded", JSON.stringify(imageUploaded))

// console.log($("#imageUploaded").val())