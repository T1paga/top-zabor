document.addEventListener('DOMContentLoaded', function () {
  const distanceByStep = 33;
  const baseStepHeight = 55;

  const steps = document.querySelectorAll('.how__step--info');
  const step = document.querySelector('.how__step');

  step.style.flex = `0 0 ${Math.floor(100 / steps.length)}%`;

  let tempDistance = 0;

  function checkScroll() {
    const howSection = document.querySelector('.how');
    const howSectionRect = howSection.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (howSectionRect.top < viewportHeight && howSectionRect.bottom > 0) {
      animateSteps();
      window.removeEventListener('scroll', checkScroll);
    }
  }

  function animateSteps() {
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
  }

  window.addEventListener('scroll', checkScroll);
});
