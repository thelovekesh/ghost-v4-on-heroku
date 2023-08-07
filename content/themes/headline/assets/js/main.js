(function () {
    pagination(true);
})();

(function () {
    let route = window.location.pathname;
    if (route === "/de/") {
        document.title = "MVST. Blog"
    }
    let slugs = route.split('/');
    let isDeutsch = slugs[1] === "de";
    let hidden = true;
    let selectorEnglish = document.querySelector("#language-selector-english");
    let selectorDeutsch = document.querySelector("#language-selector-deutsch");
    let englishContent = document.querySelectorAll('.english-only');
    let germanContent = document.querySelectorAll('.german-only');
    console.log(englishContent,germanContent)
    if (isDeutsch) {
        selectorEnglish.classList.add('invisible');
        englishContent.forEach(function (element) {
            element.remove();
        })
    } else {
        selectorDeutsch.classList.add('invisible');
        germanContent.forEach(function (element) {
            element.remove();
        })
    }
    let optionsDetusch = document.querySelector("#options-deutsch")
    let overlayDeutsch = document.querySelector("#overlay-deutsch");
    let optionsEnglish = document.querySelector("#options-english")
    let overlayEnglish = document.querySelector("#overlay-english");
    selectorEnglish.addEventListener('click', function () {
        hidden = !hidden;
        console.log("clicked", hidden);
        if (hidden) {
            optionsEnglish.classList.add("invisible");
            overlayEnglish.classList.add("invisible");
        } else {
            optionsEnglish.classList.remove("invisible");
            overlayEnglish.classList.remove("invisible");
        }
    })
    selectorDeutsch.addEventListener('click', function () {
        hidden = !hidden;
        console.log("clicked", hidden);
        if (hidden) {
            optionsDetusch.classList.add("invisible");
            overlayDeutsch.classList.add("invisible");
        } else {
            optionsDetusch.classList.remove("invisible");
            overlayDeutsch.classList.remove("invisible");
        }
    })
    if (!document.body.classList.contains('post-template')) return;

    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();
