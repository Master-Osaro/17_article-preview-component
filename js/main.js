let shareBtn = document.querySelector('.card__profile-share-ico--wrapper');
let mobileShareBtn = document.querySelector('.card__profile-share-mobile-ico--wrapper');
let shareBtnIcon = document.querySelector('.card__profile-share-ico');
let shareOptionsCard = document.querySelector('.card__profile-share');
let mobileShareOptionsCard = document.querySelector('.card__profile-share-mobile');

let toggledOn = false;
shareBtn.addEventListener('click', function() {
    showCard(toggledOn);
});
mobileShareBtn.addEventListener('click', function() {
    showCard(toggledOn);
});

function checkScreenSize(toggledOnParams) {
    if (toggledOnParams == true) {
        //check screen size in JS
        if (document.body.clientWidth > 620) {
            shareOptionsCard.style.opacity = 1;
            mobileShareOptionsCard.style.display = 'none';
        } else {
            mobileShareOptionsCard.style.display = 'grid';
            shareOptionsCard.style.opacity = 0;
        }
        shareBtn.style.backgroundColor = "#48556a"
        shareBtnIcon.style.backgroundImage = "url(../images/icon-share2.svg)"
    } else if (toggledOnParams == false) {
        if (document.body.clientWidth > 620) {
            shareOptionsCard.style.opacity = 0;
        } else {
            mobileShareOptionsCard.style.display = 'none';
        }
        shareBtn.style.backgroundColor = "#ecf2f8"
        shareBtnIcon.style.backgroundImage = "url(../images/icon-share.svg)";
    }
    // console.log(document.body.clientWidth);
}

function showCard(toggledOnParams) {
    if (toggledOnParams == false) {
        checkScreenSize(true);
        toggledOn = true;
    } else if (toggledOnParams == true) {
        checkScreenSize(false);
        toggledOn = false;
    }
}

//on screen resize ensure share's state is still preserved
//use document.body.clientWidth instead of screen.width
window.addEventListener("resize", function(event) {
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');
    checkScreenSize(toggledOn);
})