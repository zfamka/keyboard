let kkey = document.querySelectorAll('.key');
let caps = document.querySelector('.capslock');

function t11(e) {
    for (let i = 0; i < kkey.length; i++) {
        let data = kkey[i].dataset.code;
        if (data == e.key || data == e.code) {
            kkey[i].classList.add('dimming');
        }
        else if (caps.dataset.code == e.key) {
            caps.classList.toggle('dimming');
        }
    }
    return false
}

document.querySelector('.i-11').onkeydown = t11;

function t11a(e) {
    for (let i = 0; i < kkey.length; i++) {
        let data = kkey[i].dataset.code;
        if (data == e.key || data == e.code) {
            kkey[i].classList.remove('dimming');
        }
    }
}

document.querySelector('.i-11').onkeyup = t11a;