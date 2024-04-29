var isAdvancedUpload = function () {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
    fileInput.value = '';
    console.log("file input value ", fileInput.value);
});


fileInput.addEventListener("change", e => {
    console.log(" file > " + fileInput.value)
    uploadIcon.innerHTML = 'check_circle';
    dragDropText.innerHTML = 'File Dropped Successfully!';
    // document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" name="photo" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
    uploadButton.innerHTML = `Upload`;
    fileName.innerHTML = fileInput.files[0].name;
    fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
    let isFileUploaded = fileInput.value;
    if (isFileUploaded != '') {
        if (fileFlag == 0) {
            fileFlag = 1;
            var width = 0;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 390) {
                    clearInterval(id);
                    uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
                } else {
                    width += 5;
                    progressBar.style.width = width + "px";
                }
            }
        }
    } else {
        cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
    }
});

// uploadButton.addEventListener("click", () => {
//     // Check if a file is selected
//     if (fileInput.files.length > 0) {
//         let selectedFile = fileInput.files[0];
        
//         // Set the value of the file input to the selected file
//         fileInput.files = fileInput.files;

//         // Now you can perform any additional processing with the selected file if needed
        
//         // Add your upload logic here
//         if (fileFlag == 0) {
//             fileFlag = 1;
//             var width = 0;
//             var id = setInterval(frame, 20);
//             function frame() {
//                 if (width >= 390) {
//                     clearInterval(id);
//                     uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
//                 } else {
//                     width += 5;
//                     progressBar.style.width = width + "px";
//                 }
//             }
//         }
//     } else {
//         cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
//     }
// });



cancelAlertButton.addEventListener("click", () => {
    cannotUploadMessage.style.cssText = "display: none;";
});

if (isAdvancedUpload) {
    ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach(evt =>
        draggableFileArea.addEventListener(evt, e => {
            e.preventDefault();
            e.stopPropagation();
        })
    );

    ["dragover", "dragenter"].forEach(evt => {
        draggableFileArea.addEventListener(evt, e => {
            e.preventDefault();
            e.stopPropagation();
            uploadIcon.innerHTML = 'file_download';
            dragDropText.innerHTML = 'Drop your file here!';
        });
    });

    draggableFileArea.addEventListener("drop", e => {
        uploadIcon.innerHTML = 'check_circle';
        dragDropText.innerHTML = 'File Dropped Successfully!';
        document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" name="photo" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
        uploadButton.innerHTML = `Upload`;
        // fileInput.setAttribute('src', element.Symbol);
        let files = e.dataTransfer.files;
        fileInput.files = files;
        console.log(files[0].name + " " + files[0].size);
        console.log(document.querySelector(".default-file-input").value);
        fileName.innerHTML = files[0].name;
        fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + " KB";
        uploadedFile.style.cssText = "display: flex;";
        progressBar.style.width = 0;
        fileFlag = 0;
    });
}

removeFileButton.addEventListener("click", () => {
    uploadedFile.style.cssText = "display: none;";
    fileInput.value = '';
    uploadIcon.innerHTML = 'file_upload';
    dragDropText.innerHTML = 'Drag & drop any file here';
    // document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" name="photo" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
    uploadButton.innerHTML = `Upload`;
});