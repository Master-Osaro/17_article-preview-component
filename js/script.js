let shareBtn = document.querySelector('.card__profile-share-ico--wrapper');
let shareBtnIcon = document.querySelector('.card__profile-share-ico');
let shareOptionsCard = document.querySelector('.card__profile-share');

let toggledOn = false;
shareBtn.addEventListener('click', function() {
    showCard(toggledOn);
});

function showCard(toggledOnParams) {
    if (toggledOnParams == false) {
        shareOptionsCard.style.opacity = 1;
        shareBtn.style.backgroundColor = "#48556a"
        shareBtnIcon.style.backgroundImage = "url(../images/icon-share2.svg)"
        toggledOn = true;
    } else if (toggledOnParams == true) {
        shareOptionsCard.style.opacity = 0;
        shareBtn.style.backgroundColor = "#ecf2f8"
        shareBtnIcon.style.backgroundImage = "url(../images/icon-share.svg)";
        toggledOn = false;
    }
    // console.log(toggledOn);
}