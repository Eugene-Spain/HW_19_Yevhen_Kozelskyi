alert("Greetings stranger! You are visiting the interesting web-page with a game, where you should guess a randomly generated number by our mysterious operation system. ")
let userDecision = confirm("Would you like to start the game?")
if (userDecision === false){
    alert("Okay, maybe next time, have a nice day!")
}
else{
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Можно заменить 10 на число поменьше что-бы увеличить шансы на победу ))
    let userRespond = prompt("Please try to guess the number from 1 to 10. Take a chance to win 100$")
    let checkNumber = isNaN(userRespond) // проверяем что пользователь ввёл "нечисло"
    if (checkNumber === true){ 
        alert("You have inserted not a number, try again.")  //Если он ввёл нечисло значит нам это не подходит.
    }
    
    else if(userRespond == randomNumber){ // Не работает в стрикт === , не знаю почему, но видимо рандомное число не число. Только через == работает. Это проблема?
        alert("Oh my god, you have won 100$. Your number was " + (userRespond) + " and its absolutely correct. Get tickets to Valencia to receive your prize :)") 
        alert("Thanks for playing, cya")
    }
    
    else if (userRespond > 10){ 
        alert("From 1 to 10, no more.... Don't try to cheat :)")
    }
    else{
        alert("Unfortunately you have decided that its" + " " + (userRespond) + " but the correct response was" + " " + (randomNumber))
        alert("Don't mess up. Keep trying and you will win. Thanks for playing, cya")
    }
}

