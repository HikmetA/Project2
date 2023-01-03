const button = document.querySelector("#game__btn");
button.addEventListener("click", ()=>{
    let question = prompt("Сколько длилась столетняя война? A) 116 B) 101 C) 120").toLowerCase();

    function first(question){
        if(question == 'a'){
            console.log('Вы ответили правильно')
            question = prompt('Как часто проводится чемпионат мира по футболу? A) каждые 4 года, B) каждые 5 лет, C) каждые 3 года').toLowerCase();
            if(question == 'a'){
                console.log('Вы ответили правильно')
                question = prompt('Чему равна гипотенуза с катетами 3 и 4 A) 6, B) 5, C) 10').toLowerCase();
                if(question == 'b'){
                    console.log('Вы ответили правильно')
                    console.log("Поздравляю, вы победили)")
                }
                else{
                    console.log('К сожалению вы ответили неправильно')
                    console.log('Игра окончена')
                }
            }
            else{
                console.log('К сожалению вы ответили неправильно')
                console.log('Игра окончена')
            }
        }
        else{
            console.log('К сожалению вы ответили неправильно')
            console.log('Игра окончена')
        }
    }  
    first(question)   
})

// 2 task//
console.log("Вычисление рефинансирования: ")
function calculate(kapital, percent, days, date, periods){
    let sum;
    sum = (+kapital)*(1 + (+percent) * (+days)/ +date/100)**(+periods)
    sum = Math.round(sum)
    console.log(sum);
}
calculate(10000, 10, 30, 365, 10)