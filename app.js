const correctAnswers=["B","B","B","B"];
const result = document.querySelector('.result');
let score = 0;

const form = document.querySelector('.quiz-form');
form.addEventListener('submit',e =>{
    e.preventDefault();

    
    const uAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    //check Asewer

    uAnswer.forEach((answer,index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

scrollTo(0,0);
//result.querySelector('span').textContent = `${score}%`;
result.classList.remove('d-none');

let output = 0;
const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer)
    }
    else{
        output++
    }
},10 )

});



