    const pin = document.querySelector('.pin');
    let count = 0;
    const ball = () => {
        count += 2;
        pin.style.marginTop = `${count}px`;
        requestAnimationFrame(ball);
        if (parseInt(pin.style.marginTop) > window.innerHeight) {
            count = -320
        }
    }
    ball();