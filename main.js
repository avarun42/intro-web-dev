function changeListItem() {
    var listItem = document.querySelectorAll('li')[2];
    listItem.textContent = 'Javascript';
}

// These do the same things.
// document.querySelector('h1').onclick = changeListItem;
document.querySelector('h1').addEventListener('click', changeListItem);

document.querySelector('button').onclick = function() {
    document.querySelector('h1').setAttribute('style', 'color: orange');
}

function changeImageSrc() {
    if (this.getAttribute('src').startsWith('http')) {
        this.setAttribute('src', 'http://i1339.photobucket.com/albums/o717/adam_gross1/13043444_1189955967682926_8496823276350081830_n_zpsvplxcfbc.jpg')
    } else {
        this.setAttribute('height', '50px');
    }
}

document.querySelectorAll('img').forEach(el => {
    el.onclick = changeImageSrc;
});
