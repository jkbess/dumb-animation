export default function randomZoom (el, speed) {
    el.style.transition = `all linear ${speed}ms`;
    return setInterval(() => {
        el.style.transform = `scale(${Math.random() * 0.25 + 0.75})`;
    }, speed);
}