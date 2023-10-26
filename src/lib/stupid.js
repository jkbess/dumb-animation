export default function stupid (el, speed) {
    el.style.transition = `all linear ${speed / 2}ms`;
    return setInterval(() => {
        const val = [];
        for (let i = 0; i < 6; i++) {
            val.push(i < 4 ? Math.random() + 0.25 : Math.random() * 6);
        }
        el.style.transform = `matrix(${val.join(',')})`;
    }, speed);
}