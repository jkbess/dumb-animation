export default function zoomIn (el, speed) {
    el.style.transform = `scale3d(0, 0, 0)`;
    el.style.transition = `all linear ${speed}ms`;
    setTimeout(()=>{
        el.style.transform = `scale3d(1, 1, 1)`;
    }, speed);
    return null;
}