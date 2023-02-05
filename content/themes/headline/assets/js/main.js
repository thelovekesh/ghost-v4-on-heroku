(function () {
    pagination(true);
})();

(function () {
    console.log(window.location);
    let route = window.location.pathname;
    let slugs = route.split('/');
    console.log(slugs);
    let isDeutsch = slugs[1] === "de";
    let hidden = true;
    let selectorEnglish = document.querySelector("#language-selector-english");
    let selectorDeutsch = document.querySelector("#language-selector-deutsch");
    if (isDeutsch) {
        selectorEnglish.classList.add('invisible');
    } else {
        selectorDeutsch.classList.add('invisible');
    }
    let options = document.querySelector("#options")
    let overlay = document.querySelector("#overlay");
    selectorEnglish.addEventListener('click', function () {
        hidden = !hidden;
        console.log("clicked", hidden);
        if (hidden) {
            options.classList.add("invisible");
            overlay.classList.add("invisible");
        } else {
            options.classList.remove("invisible");
            overlay.classList.remove("invisible");
        }
    })
    selectorDeutsch.addEventListener('click', function () {
        hidden = !hidden;
        console.log("clicked", hidden);
        if (hidden) {
            options.classList.add("invisible");
            overlay.classList.add("invisible");
        } else {
            options.classList.remove("invisible");
            overlay.classList.remove("invisible");
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
