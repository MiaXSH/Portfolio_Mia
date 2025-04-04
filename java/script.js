var imageModal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var ImageCaption = document.getElementById("ImageCaption");
var imageIntro = document.getElementById("imageIntro");

var clickingImage = document.querySelectorAll('.modalImage');


clickingImage.forEach(function(item) { //https://www.w3schools.com/jsref/jsref_foreach.asp
    item.onclick=function() {

        imageModal.style.display = "block";

        modalImage.src = this.src; 
        ImageCaption.innerHTML = this.alt;  


        // const closest = element.closest(".imageIntro");
        // imageIntro.innerHTML = closest.src
        var column = this.closest('.column');
        var ImgIntro = column.querySelector('.imageIntro');

        // imageIntro.style.opacity = "1";
        imageIntro.innerHTML = ImgIntro.innerHTML;
      
    };
});





var videoModal = document.getElementById('videoModal');
var modalVideoPlayer = document.getElementById("modalVideoPlayer");
var VideoCaption = document.getElementById ('VideoCaption');
var videoIntro = document.getElementById("videoIntro");


var clickingVideo = document.querySelectorAll('.modalVideo');

clickingVideo.forEach(function(item){
    item.onclick = function(){
        videoModal.style.display = 'block';

        var videoSrc = this.getAttribute('data-video-src');

        modalVideoPlayer.src = videoSrc;
        VideoCaption.innerHTML = this.alt;

        var column = this.closest('.column');
        var VidIntro = column.querySelector('.videoIntro');

        // videoIntro.style.opacity = "1";
        videoIntro.innerHTML = VidIntro.innerHTML;

    };


});


document.getElementById("closeImage").onclick = function() {
    // imageIntro.style.opacity = "0";

    // imageIntro.classList.remove("active");
    imageModal.style.display = "none";
};

document.getElementById('closeVideo').onclick = function() {
    // imageIntro.style.opacity = "0";
    // videoIntro.classList.remove("active");

    videoModal.style.display = 'none';

    // modalVideoPlayer.pause();
    modalVideoPlayer.currentTime = 0;
}
