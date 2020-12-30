class Sky {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    initCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.ctx.fillStyle = 'rgb(44, 73, 153)';
        this.ctx.fillRect(0, 0, this.width, this.height)
    }

    generateSnows(count) {
        let snows = [];

        for (let i = 0; i < count; i++) {
            const radius = Math.random() * 3 + 2;

            snows.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: radius,
                color: '#fff',
                speed: Math.random() + 0.25,
            })
        }

        this.snows = snows;
    }

    drawSnows() {
        this.snows.forEach(snow => {
            this.drawSnow(snow);
        })
    }

    updateSnows() {
        this.snows.forEach(snow => {
            snow.y += snow.speed;
            snow.x += snow.speed;
            if (snow.y > this.height + 2 * snow.radius) {
                snow.y = -2 * snow.radius
            }
            if (snow.x > this.width + 2 * snow.radius) {
                snow.x = -2 * snow.radius
            }
        })
    }

    clearCanvas() {
        this.ctx.fillStyle = 'rgb(44, 73, 153)';
        this.ctx.fillRect(0, 0, this.width, this.height)
    }

    drawSnow(snow) {
        this.ctx.save();

        this.ctx.fillStyle = snow.color;

        this.ctx.beginPath();

        this.ctx.translate(snow.x, snow.y);
        this.ctx.moveTo(0, 0 - snow.radius);
        this.ctx.arc(100, 35, 1, 0, 2 * Math.PI);

        this.ctx.fill();
        this.ctx.restore();
    }

    draw() {
        this.clearCanvas();
        this.drawSnows();
        this.updateSnows();
        window.requestAnimationFrame(() => this.draw());
    }

    run() {
        this.initCanvas();
        this.generateSnows(500);
        this.draw();
    }
}

const sky = new Sky(document.querySelector('#canvas'));
sky.run();