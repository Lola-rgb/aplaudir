input.onSound(DetectedSound.Loud, function () {
    if (interruptor == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        interruptor = 0
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        interruptor = 1
    }
})
let interruptor = 0
interruptor = 1
