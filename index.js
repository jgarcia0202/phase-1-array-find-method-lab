// code your solution here
function superbowlWin(record) {
    let win = undefined
    record.find((game) => {
    if (game.result === 'W'){
    win = game.year
    }}
    )
    return win
}

/*
let superbowlWin = (array) => {
    let result = undefined;
    array.find((play) => {
        if (play.result === "W") {
        console.log (play.year)
        result = play.year;
    }
});
    return result;
}*/