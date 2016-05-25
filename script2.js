/*jshint -W117*/
/*jshint -W098*/
/*jshint -W061*/




var myAlbum = ["IMG_1-min.jpg", "IMG_2-min.jpg", "IMG_3-min.jpg", "IMG_4-min.jpg", "IMG_5-min.jpg", "IMG_6-min.jpg", "IMG_7-min.jpg", "IMG_8-min.jpg", "IMG_9-min.jpg"];

var imageSrc = document.getElementById('mainImage');
var imageIndex = 0;

function changeImage() {

    imageSrc.setAttribute("src", "Images/" + myAlbum[imageIndex]);
    imageIndex++;
    if (imageIndex == myAlbum.length) {
        imageIndex = 0;
    }

}
var intervalHandle;
function startSlideShow() {
    intervalHandle = setInterval(changeImage, 2000);
}
function stopSlideShow() {
    clearInterval(intervalHandle);
}
