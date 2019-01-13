let imageMultiply: Image = null
let imageAddition: Image = null
let imageMinus: Image = null
let imageDivide: Image = null
let mode: Image = null
let rhs = 0
let lhs = 0
let ans = 0
input.onGesture(Gesture.LogoUp, function () {
    if (mode == imageAddition) {
        mode = imageMinus
    } else {
        if (mode == imageMinus) {
            mode = imageMultiply
        } else {
            if (mode == imageMultiply) {
                mode = imageDivide
            } else {
                if (mode == imageDivide) {
                    mode = imageAddition
                }
            }
        }
    }
    mode.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    ans = 0
    if (mode == imageAddition) {
        ans = lhs + rhs
    } else {
        if (mode == imageMinus) {
            ans = lhs - rhs
        } else {
            if (mode == imageMultiply) {
                ans = lhs * rhs
            } else {
                if (mode == imageDivide) {
                    ans = lhs / rhs
                }
            }
        }
    }
    basic.showNumber(ans)
    lhs = 0
    rhs = 0
})
input.onButtonPressed(Button.A, function () {
    lhs += 1
    basic.showNumber(lhs)
})
input.onButtonPressed(Button.B, function () {
    rhs += 1
    basic.showNumber(rhs)
})
imageDivide = images.createImage(`
    . . # . .
    . . . . .
    # # # # #
    . . . . .
    . . # . .
    `)
imageMinus = images.createImage(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
imageAddition = images.createImage(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
imageMultiply = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
mode = imageDivide
