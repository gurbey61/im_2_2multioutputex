input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(300)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("CSIM")
})
input.onButtonPressed(Button.B, function () {
    pins.analogSetPitchPin(AnalogPin.P1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
