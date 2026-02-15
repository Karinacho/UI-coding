import { gsap } from "gsap";


function toggleSeason() {
    const body = document.querySelector('body');
    const switchButton = document.querySelector('#theme-switcher');
    let currentSeason = 'winter';

    switchButton.addEventListener('click', () => {
        currentSeason = currentSeason === 'winter' ? 'spring' : 'winter';
        body.classList.toggle('winter');
        switchButton.classList.toggle('switch-winter');
        addSnowflakes()
    })
 }

 function createSnowflake() {
     const snowflakesContainer = document.querySelector('.snowflakes');
     const snowflake = document.createElement('div');
     snowflake.className = 'snowflake';
     snowflake.textContent = '❄';

     //Picks a random horizontal starting position for each snowflake. (random pixel)
     const startX = Math.random() * window.innerWidth;

     //General formula Math.random() * (max - min) + min for range random
     //min = 0.7; max = 1.3
     //Here I'm picking a different size for the snowflake

     const snowFlakeSize = Math.random() * (1.3 - 0.7) + 0.7; // 0.7 - 1.3em
     const durationOfSnowflakeFall= Math.random() * (14 - 8) + 8 // between 8 and 14 seconds

     // 0 - 4 seconds; “wait this many seconds before starting the animation”;
     // Snowflakes don’t all start falling at the same time
     const delay = Math.random() * 4;

    //Set initial position and size
     snowflake.style.left = `${startX}px`;
     snowflake.style.fontSize = `${snowFlakeSize}em`;

     snowflakesContainer.append(snowflake);

     // GSAP animation with more natural movement
     gsap.to(snowflake,  {
         y: window.innerHeight + 50,
         x: '+=' + (Math.random() * 100 - 50), //Drift left to right
         rotation: Math.random() * 360,
         opacity: 0.3,
         duration: durationOfSnowflakeFall,
         delay,
         ease: 'none',
         onComplete: () => {
             // Reset and restart animation for infinite loop
             gsap.set(snowflake, {
                 y: -20,
                 x: startX,
                 rotation: 0,
                 opacity: 1
             });
            animateSnowflake(snowflake, startX);
         }
     })

     // Responsive: recreate snowflakes on window resize
     let resizeTimeout;
     window.addEventListener('resize', () => {
         clearTimeout(resizeTimeout);
         resizeTimeout = setTimeout(() => {
             snowflakesContainer.innerHTML = '';
             for (let i = 0; i < 150; i++) {
                 createSnowflake();
             }
         }, 250);
     });
 }

function animateSnowflake(snowflake, startX) {
    const duration = Math.random() * 6 + 8;

    gsap.to(snowflake, {
        y: window.innerHeight + 50,
        x: '+=' + (Math.random() * 100 - 50),
        rotation: Math.random() * 360,
        opacity: 0.3,
        duration: duration,
        ease: 'none',
        onComplete: () => {
            gsap.set(snowflake, {
                y: -20,
                x: startX,
                rotation: 0,
                opacity: 1
            });
            animateSnowflake(snowflake, startX);
        }
    });
}

 function addSnowflakes() {

    const numberOfSnowflakes = 150;

     for (let i = 0; i < numberOfSnowflakes; i++) {
         createSnowflake();
     }
 }


 toggleSeason()