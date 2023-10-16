function createImgElement(photoURL) {
    const imgElem = document.createElement('img')
    imgElem.src = photoURL
    imgElem.alt = 'the URL is not working'
    return imgElem
}

function addPhotoToGalleryDiv(imgElem) {
    const photoGalleryDiv = document.getElementById('photo-gallery')
    photoGalleryDiv.appendChild(imgElem)
}

function addDeleteButton(imgElem) {
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    deleteButton.addEventListener('click', function () {
        imgElem.remove()
        deleteButton.remove()
    })
    const photoGalleryDiv = document.getElementById('photo-gallery')
    photoGalleryDiv.appendChild(deleteButton)
}


function addPhoto() {
    const photoURL = prompt("Enter the URL of the photo")
    const imgElem = createImgElement(photoURL)
    addPhotoToGalleryDiv(imgElem)
    addDeleteButton(imgElem)
}

const addPhotoBtn = document.getElementById('addPhotoBtn')
addPhotoBtn.addEventListener('click', addPhoto)
