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

    TweenMax.fromTo('.snow', 10, {
        y: 0,
        x: 50
    }, {
        y: 100 + 'vh',
        x: 250,
        repeat: -1,
        ease: "power3.out"
    })
    //////
    // santa
    const santaSledge = document.querySelector('.santaSledge');

    const santaAnim = new TimelineMax({
        repeat: -1
    });
    santaAnim.set(santaSledge, {
        x: -500 + 'px',
        y: 80 + 'vh',
        rotation: 10,
        repeat: -1,
    });
    santaAnim.to(santaSledge, 4, {
        x: 35 + 'vw',
        y: 75 + 'vh',
        rotation: 5,
        ease: "none"
    });
    santaAnim.to(santaSledge, 4, {
        x: 100 + 'vw',
        rotation: -5,
        y: 50 + 'vh',
        ease: "none"
    });