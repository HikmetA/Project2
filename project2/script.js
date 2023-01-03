const btn = document.querySelector("#btn");
let obj = {};
btn.addEventListener("click", ()=>{
    const contribution = document.querySelector("#contribution").value
    const time = document.querySelector("#time").value
    const refill = document.querySelector('.form__input').value
    const percent = document.querySelector("#percent").value
    const date = document.querySelector("#date").value
    calculation(contribution,refill,percent,date,time);
})

function calculation(x, y, z, t,q){
    if(+x != '' && +y != '' && +z != '' && +t != ''){
        isNumber(x, y, z, t,q);
    }
    else{
        const error = document.querySelector('#error');
        error.innerText = "---------Заполните поля---------"
        obj.error = error.innerText
        console.log(obj)
    }
}

function isNumber(a, b, c, d,e){
    if(!isNaN(+a), !isNaN(+b), !isNaN(+c), !isNaN(+d)){
        comparison(a, b, c, d,e)
    }
    else{
        const numberError = document.querySelector('#number__error');
        numberError.innerText = "----- Введите числа -----"
        obj.numberError = numberError.innerText
        console.log(obj)
    }
}

function comparison(contribution, refill, percent, date, time){
    let sum = +contribution
    let sumRefill = 0
    let sumPercent = 0
    if(+contribution > 0 && +refill > 0 && +percent >0 && +percent < 100 && Number.isInteger(+date) && +date>0 && time == "monthly"){
        for(let i = 1; i <= +date/30; i++){
            sum = (+sum + (+sum)*(+percent/100) + (+refill))
            sumRefill += +refill
        }
        alert(Math.round(sum));
    }
    else if(+contribution > 0 && +refill > 0 && +percent >0 && +percent < 100 && Number.isInteger(+date) && +date>0 && time == "quarterly"){
        for(let i = 1; i <= +date/30; i++){
            sum = +sum + (+sum * (+percent/100))
        }
        for(let j = 1; j <= +date/90; j++){
          sum += +refill
          sumRefill += +refill
        }
        alert(Math.round(sum));
    }
    else if(+contribution > 0 && +refill > 0 && +percent >0 && +percent < 100 && Number.isInteger(+date) && +date>0 && time == "annually"){
        for(let i = 1; i <= +date/30; i++){
            sum = +sum + (+sum * (+percent/100))
        }
        for(let j = 1; j <= +date/365; j++){  
          sum += +refill
          sumRefill += +refill
        }
        alert(Math.round(sum));
    }
    else{
        obj.notNumber = NaN
        console.log(obj)
        return NaN
    }
    sum = Math.round(sum)
    sumPercent = Math.round(sumPercent)

    sumPercent = (((+sum) - (+sumRefill) - (+contribution))/(+contribution))*100

    obj.sum = sum;
    obj.sumRefill = sumRefill;
    obj.sumPercent = sumPercent

    console.log(obj)
}