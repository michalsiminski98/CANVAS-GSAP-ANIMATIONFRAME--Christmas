    const pin = document.querySelector('.pin');
    let count = 0;

    //////
    // pin
    const ball = () => {
        count += 2;
        pin.style.marginTop = `${count}px`;
        requestAnimationFrame(ball);
        if (parseInt(pin.style.marginTop) > window.innerHeight) {
            count = -320
        }
    }
    ball();
    //////
    // snow

    TweenMax.fromTo('.snow', 15, {
        y: 0,
        x: 50
    }, {
        y: 100 + 'vh',
        x: 250,
        repeat: -1,
        ease: "power3.out"
    })