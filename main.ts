function LightUp (num: number) {
    led.plot(num % 5, Math.floor(num / 5))
    LightsOn.push(num)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        CurrentLight = randint(0, 24)
        // Checks if the chosen light is already on
        if (led.point(CurrentLight % 5, Math.floor(CurrentLight / 5)) == false) {
            LightUp(CurrentLight)
            break;
        } else if (LightsOn.length == 25) {
            led.enable(false)
            basic.pause(100)
            led.enable(true)
            break;
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
    LightsOn = []
    OldestLight = 0
    CurrentLight = 0
})
input.onButtonPressed(Button.B, function () {
    if (LightsOn.length > 0) {
        OldestLight = LightsOn.shift()
        led.unplot(OldestLight % 5, Math.floor(OldestLight / 5))
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `, 0)
basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `, 0)
    }
})
let OldestLight = 0
let CurrentLight = 0
let LightsOn: number[] = []
// Tracks the lights that are currently on
LightsOn = []
