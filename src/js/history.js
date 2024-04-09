document.addEventListener('DOMContentLoaded', function () {
  const distanceByStep = 33;
  const baseStepHeight = 55;

  const steps = document.querySelectorAll('.history__step--info');
  const stepsDown = document.querySelectorAll('.history__step--info--down');
  const step = document.querySelector('.history__step');

  step.style.flex = `0 0 ${Math.floor(100 / steps.length)}%`;

  let tempDistance = 0;

  if (steps.length) {
    steps.forEach(function (step, index) {
      const stepHeight = step.offsetHeight;
      const diff = stepHeight - baseStepHeight;

      step.style.setProperty('--stepHeight', `${stepHeight}px`);

      if (index === 0) {
        step.style.setProperty('--diff', `${baseStepHeight - diff}px`);
      } else {
        step.style.setProperty(
          '--diff',
          `${baseStepHeight + tempDistance}px - ${diff}px`
        );
      }

      step.classList.add('dynamic');

      const elementStyles = step.style;
      elementStyles.marginTop = `${165 - tempDistance}px`;
      elementStyles.animation = 'slideInFromLeft 0.5s ease forwards';
      elementStyles.animationDelay = `${0.5 + index * 0.5}s`;

      if (index === steps.length - 1) {
        elementStyles.backgroundColor = '#ff8500';
        elementStyles.color = `#000`;
      }

      tempDistance = tempDistance + distanceByStep;
    });
  }

  tempDistance = 33;
  startTop = 50;

  if (stepsDown.length) {
    stepsDown.forEach(function (step, index) {
      step.style.setProperty(
        '--stepTopMargin',
        `${50 + distanceByStep * index}px`
      );

      step.style.setProperty(
        '--stepHeightDown',
        `${(50 + distanceByStep * index) * -1}px`
      );

      const elementStyles = step.style;
      elementStyles.marginTop = `${50 + distanceByStep * index}px`;
      step.classList.add('dynamic');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.order-track-step');
  const animationDelay = 0.5; // Задержка анимации текста
  const totalAnimationTime = steps.length * animationDelay * 1000;

  steps.forEach(function (step, index) {
    const opacity = 0;

    step.style.opacity = opacity;
    step.style.animation = `slideInFromLeft 0.5s ease forwards`;
    step.style.animationDelay = `${index * animationDelay}s`;

    if (index === steps.length - 1) {
      setTimeout(() => {
        steps.forEach(function (step) {
          const line = step.querySelector('.order-track-status-line');
          if (line) {
            line.style.opacity = 1;
            line.style.animation = `slideInFromLeft 1s ease forwards`;
            line.style.animationDelay = `0.25s`;
          }
          step.style.opacity = 1;
        });
      }, totalAnimationTime);
    }
  });
});
