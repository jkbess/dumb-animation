export default function (el, speed) {
    el.parentElement.style.perspective = `1000px`;
    el.style.transformOrigin = `50% 0%`;
    el.style.transition = `all ease-in-out ${speed}ms`;
    let amt = 30;
    return setInterval(() => {
        amt *= -1;
        el.style.transform = `rotateX(${amt}deg)`;
    }, speed);
}