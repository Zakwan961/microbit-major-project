input.onButtonPressed(Button.A, function () {
    motion.driveStraight(100)
    for (let index = 0; index <= 4; index++) {
        motion.turnLeft(100)
    }
})
basic.forever(function () {
	
})
