// tests go here; this will not be compiled when this package is used as a library
knockbit_bluetooth.init(true, -1)
basic.forever(() => {
    knockbit_bluetooth.sendMessage();
})
input.onButtonPressed(Button.A, () => {
    basic.showString(control.deviceName())
})