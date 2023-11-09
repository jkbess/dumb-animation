const boxAnimator = new Animator('#magicbox', 500);
boxAnimator.animate('stupid');
setTimeout(() => {
    boxAnimator.animate('zoomIn');
}, 2000)

