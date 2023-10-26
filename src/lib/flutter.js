export default function (el, speed) {
    el.style.transition = `all ease-in-out ${speed}ms`;
    return setInterval(() => {
        el.style.transform = `rotateY(${Math.random() * 90 + 315}deg)`;
    }, speed);
}