var startAnimation = document.querySelector('.startAnimation');
var slideInTitle = document.querySelector('.slideInTitle');
var MiaIntro = document.getElementById('MiaIntro');
var contact = document.getElementById('contact');
var arrow = document.getElementById('arrow')
var title = document.getElementById('title');

setTimeout(function(){
    slideInTitle.style.top = '50vh';
},200);


setTimeout(function(){
    slideInTitle.style.transition = 'top 2.5s ease';
    slideInTitle.style.top = '20vh';
},2000);

setTimeout(function(){
    MiaIntro.style.display = 'block';
},2400);

setTimeout(function(){
    MiaIntro.style.opacity = '0';
},7000);

setTimeout(function(){
    MiaIntro.style.display = 'none';
    
},7850);

setTimeout(function(){
    slideInTitle.style.backgroundColor = 'rgba(0,0,0,0)';
    contact.style.display = 'block';
},7855);

setTimeout(function(){
    contact.style.opacity = '1';
},7900);

setTimeout(function(){
    arrow.style.opacity = '1';
},8000);



arrow.onclick = function(){

    setTimeout(function(){
        contact.style.opacity = '0';
        arrow.style.opacity = '0';
        slideInTitle.style.top = '5vh';

        startAnimation.style.transition = 'opacity 3s ease';
        startAnimation.style.opacity = '0';
    },300);

    setTimeout(function(){
        startAnimation.style.display = 'none';
    },3200);

    setTimeout(function(){
        title.style.color = 'rgb(127, 127, 127)';
    },3300);

    setTimeout(function(){
        title.style.color = 'rgb(0, 0, 0)';
    },4100);

}

title.onmouseenter = function(){
    title.style.color = 'rgb(255, 255, 255)';
    title.style.transform = 'scale(1.5)';
    title.style.height = '20vh';
};

title.onmouseleave = function(){
    title.style.color = 'rgba(0, 0, 0, 0)';
    title.style.transform = 'scale(1)';
    title.style.height = '0';
}

// $("#title").hover(
//     function() {
//         title.style.color = 'rgb(255, 255, 255)';
//         title.style.transform = 'scale(1.5)';
    
//     },
//     function() {
//         title.style.color = 'rgb(0, 0, 0)';
//         title.style.transform = 'scale(1)';
//     }
// );



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
        imageIntro.style.display = "block";

    };
});


let paragraphs = intro.getElementsByTagName('p');
// let paragraphs = document.getElementsById('intro');
var title = document.getElementById('title');

// title.onclick = function(){
//     intro.style.display = 'block';
// }

title.onclick = function () {
    for (let i = 0; i < paragraphs.length; i++) {
        setTimeout(function(){
            paragraphs[i].style.display = 'block';

        }, i*200);
    }

    // let h1 = topPart.getElementsByTagName('h1');
    //     if(h1.style.color="rgb(0, 0, 0)"){
    //         paragraphs[i].style.display = 'none';
    //     }
};


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
        videoIntro.style.display = "block";
    };


});


document.getElementById("closeImage").onclick = function() {
    // imageIntro.style.opacity = "0";

    // imageIntro.classList.remove("active");
    imageModal.style.display = "none";
    imageIntro.style.display = "none";
};

document.getElementById('closeVideo').onclick = function() {
    // imageIntro.style.opacity = "0";
    // videoIntro.classList.remove("active");

    videoModal.style.display = 'none';
    videoIntro.style.display = "none";

    // modalVideoPlayer.pause();
    modalVideoPlayer.currentTime = 0;
}
