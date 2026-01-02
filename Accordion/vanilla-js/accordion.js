import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

export function accordion ($rootEl, {sections}) {
    function attachEvents() {
        //Use Event Delegation
        $rootEl.addEventListener('click', (event) => {
            const target = event.target;
            if(
                target.tagName !== 'BUTTON' ||
                !target.classList.contains('accordion-item-title')
            ) {
                return;
            }

            //Find the icon and toggle the direction
            const $icon = target.querySelector('.accordion-icon');
            $icon.classList.toggle('accordion-icon--rotated');

        })
    }

    function init() {
        $rootEl.classList.add('accordion');

        const $accordionSections = document.createDocumentFragment();

        sections.forEach(({value, title, contents}) => {
            const $accordionSection = document.createElement('div');
            $accordionSection.classList.add('accordion-item');

            const $accordionTitleBtn = document.createElement('button');
            $accordionTitleBtn.classList.add('accordion-item-title');
            $accordionTitleBtn.type = 'button';
            $accordionTitleBtn.setAttribute('data-value', value);

            const $accordionIcon = document.createElement('span');
            $accordionIcon.classList.add('accordion-icon');
            $accordionIcon.setAttribute('aria-hidden', 'true');

            $accordionTitleBtn.append($accordionIcon);

            $accordionSection.append($accordionTitleBtn);
            $accordionSections.append($accordionSection);
        })

        $rootEl.append($accordionSections);
    }

    init();
    attachEvents();
}


