var button = document.querySelectorAll('button');

button.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft + 'px';
        let y = e.clientY - e.target.offsetTop + 'px';

        let ripples = document.createElement('span');
        ripples.style.left = x;
        ripples.style.top = y;
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
});