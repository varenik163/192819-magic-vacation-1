import animateLetters from "../animateLetters";

const basicAnimateParams = {
  delay: 250,
  duration: 750,
  animation: `lettersAppearance`,
  animationTimingFunction: `cubic-bezier(.14,.91,.56,.98)`,
  animationFillMode: `forwards`
};

const animatedSelectors = [
  `.intro__title`,
  `.intro__date`,
  `.slider__item-title`,
  `.rules__title`,
  `.game__title`,
  `.game__counter`
];

export default () => {
  animatedSelectors.forEach((selector) => {
    const node = document.querySelector(selector);
    animateLetters(node, basicAnimateParams);
  });

  const prizesTitle = document.querySelector(`.prizes__title`);
  animateLetters(prizesTitle, {
    ...basicAnimateParams,
    delay: 150
  });

};
