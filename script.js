const switchBox = document.getElementById('switch__box');
const pricesMonthly = document.getElementsByClassName('price__monthly');
const pricesAnnually = document.getElementsByClassName('price__annually');

const app = {

    init: function() {
        console.log('Let\'s go!');
        app.switchPrice();
    },
    
    switchPrice: function(){
        //console.log(switchBox);
        switchBox.addEventListener('click', app.moveSwitchCircle);
    },

    moveSwitchCircle: function(event) {
        //console.log('Clic');
        if (switchBox.className === 'monthly') {
            switchBox.classList.replace('monthly', 'annually');
            for(let priceMonthly of pricesMonthly) {
                priceMonthly.classList.remove('current');
            }
            for (let priceAnnually of pricesAnnually) {
                priceAnnually.classList.add('current');
            }
        } else if (switchBox.className === 'annually') {
            switchBox.classList.replace('annually', 'monthly');
            for (let priceAnnually of pricesAnnually) {
                priceAnnually.classList.remove('current');
            }
            for(let priceMonthly of pricesMonthly) {
                priceMonthly.classList.add('current');
            }
        }
    },
}

document.addEventListener('DOMContentLoaded', app.init);