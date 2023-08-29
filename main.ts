pins.digitalWritePin(DigitalPin.P14, 1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    while (pins.analogReadPin(AnalogPin.P1) < 500) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
})
