const names = ["Guadalupe", "Ollie", "Aki"];
const events = ["surprise","surprise", "surprise"];

function writeCards(names, events) {
    let newArray=[];
    for ( let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return newArray;
}
writeCards(names, events);

function countDown() {
    let countDown = 10
    while (countDown >= 0)
    console.log(countDown--);
};