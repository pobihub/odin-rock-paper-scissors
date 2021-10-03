function computerPlay() {
    let randR = ['Rock','Paper','Scissors'];
    let randChoice = randR[Math.floor(Math.random()*randR.length)];
    console.log(randChoice);

}
computerPlay();