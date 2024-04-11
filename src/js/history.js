document.addEventListener('DOMContentLoaded', function () {
  const distanceByStep = 33;
  const baseStepHeight = 55;

  const historySection = document.querySelector('.history');
  const steps = document.querySelectorAll('.history__step--info');
  const stepsDown = document.querySelectorAll('.history__step--info--down');
  const step = document.querySelector('.history__step');

  step.style.flex = `0 0 ${Math.floor(100 / steps.length)}%`;

  let tempDistance = 0;
  let tempMaxHeight = 100;

  function checkScroll() {
    const historySectionRect = historySection.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (
      historySectionRect.top < viewportHeight &&
      historySectionRect.bottom > 0
    ) {
      animateHistorySteps();
      animateHistoryStepsDown();
      window.removeEventListener('scroll', checkScroll);
    }
  }

  function animateHistorySteps() {
    if (steps.length) {
      steps.forEach(function (step, index) {
        const stepHeight = step.offsetHeight;
        const diff = stepHeight - baseStepHeight;

        step.style.setProperty('--stepHeight', `${stepHeight}px`);
        step.style.setProperty('--maxHeight', `${tempMaxHeight}px`);
        step.classList.add('dynamic');
        tempMaxHeight = tempMaxHeight + 33;

        if (index === 0) {
          step.style.setProperty('--diff', `${baseStepHeight - diff}px`);
        } else if (index === steps.length - 1) {
        } else {
          step.style.setProperty(
            '--diff',
            `${baseStepHeight + tempDistance}px - ${diff}px`
          );
        }

        const elementStyles = step.style;
        elementStyles.marginTop = `${165 - tempDistance}px`;
        elementStyles.animation = 'slideInFromLeft 0.5s ease forwards';
        elementStyles.animationDelay = `${index}s`;

        if (index === steps.length - 1) {
          elementStyles.backgroundColor = '#ff8500';
          elementStyles.color = `#000`;
          elementStyles.height = '265px';
        }

        if (index !== steps.length - 1) {
          step.addEventListener('mouseover', function () {
            step.style.setProperty('--opacity', `0`);
          });

          step.addEventListener('mouseout', function () {
            step.style.setProperty('--opacity', `1`);
          });
        }

        tempDistance = tempDistance + distanceByStep;
      });
    }
  }

  function animateHistoryStepsDown() {
    if (stepsDown.length) {
      stepsDown.forEach(function (step, index) {
        const maxHeight = 100;

        step.style.setProperty(
          '--stepTopMargin',
          `${50 + distanceByStep * index}px`
        );

        step.style.setProperty(
          '--stepHeightDown',
          `${(55 + distanceByStep * index) * -1}px`
        );

        const elementStyles = step.style;
        elementStyles.marginTop = `${50 + distanceByStep * index}px`;
        step.classList.add('dynamic');
        elementStyles.animation = 'slideInFromLeftDown 0.5s ease forwards';
        elementStyles.animationDelay = `${0.5 + index * 1}s`;

        step.addEventListener('mouseover', function () {});

        step.addEventListener('mouseout', function () {});
      });
    }
  }

  window.addEventListener('scroll', checkScroll);
});
