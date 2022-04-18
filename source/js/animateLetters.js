const SPAN = `span`;
const ANIMATED_WORD = `animated-word`;
const ANIMATED_LETTER = `animated-letter`;
const ANIMATED = `animated-letters`;

export default (node, params) => {
  if (!node) {
    throw new Error(`node is required for animateLetters`);
  }

  const arrayOfLines = node.textContent.split(` `).filter((e) => e);
  node.innerHTML = null;
  node.classList.add(ANIMATED);

  arrayOfLines.forEach((line, i) => {
    const spanWord = document.createElement(SPAN);
    spanWord.classList.add(ANIMATED_WORD);

    const lineChars = line.split(``);

    lineChars.forEach((char) => {
      const spanChar = document.createElement(SPAN);
      spanChar.classList.add(ANIMATED_LETTER);
      spanChar.innerHTML = char;

      spanChar.style.animation = params.animation;
      spanChar.style.animationFillMode = params.animationFillMode;
      spanChar.style.animationDuration = `${params.duration}ms`;
      spanChar.style.animationDelay = `${(Math.random() + 1) * params.delay * (i + 1)}ms`;
      spanChar.style.animationTimingFunction = params.animationTimingFunction;

      spanWord.appendChild(spanChar);
    });

    node.appendChild(spanWord);
  });
};
