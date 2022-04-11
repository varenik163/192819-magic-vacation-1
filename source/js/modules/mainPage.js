import animateLetters from '../animateLetters';

export default () => {
  const mainTitle = document.querySelector(`.intro__title`);
  animateLetters(mainTitle, {
    delay: 250,
    duration: 750,
    animation: `introTitleFadeIn`,
    animationTimingFunction: `cubic-bezier(.49,.56,.37,1.2)`,
    animationFillMode: `forwards`
  });
};
