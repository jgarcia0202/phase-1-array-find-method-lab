// code your solution here
let superbowlWin = (array) => {
    let result = undefined;
    array.find((play) => {
        if (play.result === "W") {
        console.log (play.year)
        result = play.year;
    }
});
    return result;
}