let Start = 0
let Started = false
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    Started = true
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    elapsed = 0 - Start
    Started = false
    basic.showNumber(Math.idiv(elapsed, 1000))
    basic.showString(".")
    basic.showNumber(elapsed % 100)
})
basic.forever(function () {
    if (Started) {
        led.toggle(2, 2)
        basic.pause(500)
    }
})
