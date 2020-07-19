input.onButtonPressed(Button.A, function () {
	
})
radio.setGroup(1)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 20) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
        radio.sendValue("name", 4)
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -20) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        radio.sendValue("name", 3)
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > 15) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
        radio.sendValue("name", 2)
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -15) {
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendValue("name", 1)
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > -10 && input.rotation(Rotation.Roll) < 10 && (input.rotation(Rotation.Pitch) > -10 && input.rotation(Rotation.Pitch) < 10)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        radio.sendValue("name", 5)
    }
})
