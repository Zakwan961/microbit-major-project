def on_button_pressed_a():
    motion.drive_straight(100)
    for index in range(5):
        motion.turn_left(100)
input.on_button_pressed(Button.A, on_button_pressed_a)
