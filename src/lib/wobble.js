export default function (el, speed) {
    el.style.transition = `all linear ${speed}ms`;
    return setInterval(() => {
        el.style.transform = `rotate(${Math.random() * 24 - 12}deg)`;
    }, speed);
}