"""A number-guessing game."""
import random

class OutOfRange(Exception):
    pass


def input_integer() -> int:
    is_valid = False
    while not is_valid:
        try:
            user_guess = int(input("Enter a number between 1 and 100: "))
            if user_guess > 100 or user_guess < 1:
                raise OutOfRange()
            else:
                is_valid = True
        except ValueError:
            print("It was not a number. Please enter a number")
        except OutOfRange:
            print("The number you entered is out of range. Please enter a valid number.")
    return user_guess


def game():
    print("Hello, what's your name?")
    name = input("Type in your name: ")

    random_num = random.randint(1,100)

    guess_number = None
    guess_times = 0
    while guess_number != random_num:
        guess_number = input_integer()
        if guess_number > random_num:
            print("Your guess is too high, try again")
        elif guess_number < random_num:
            print("Your guess number is too low, try again")
        guess_times += 1

    print(f"Well done, {name}! You found my number in {guess_times} tries!")


game()






"""A number-guessing game."""

import random

# Put your code here

#user's name

print("Hello, what's your name?")
name = input("Type in your name: ")

random_num = random.randint(1,100)

guessing_times = 0

while True:
    try:
        user_guess = int(input("Enter your guess: "))
    except ValueError:
        print("That's not a valid number!")
        user_guess = int(input("Enter your guess: "))


    while user_guess < 1 or user_guess > 100:
            print("You have entered an invalid number.")
            try:
                user_guess = int(input("Enter your guess: "))
            except ValueError:
                print("That's not a valid number!")
                user_guess = int(input("Enter your guess: "))
    
    if user_guess == random_num:
         guessing_times += 1
         print(f"Congratulations! You guessed correct number in {guessing_times} times!")
         break
    elif user_guess > random_num:
         print("That's incorrect. The correct answer is lower.")
         guessing_times += 1
    else:
         print("That's incorrect. The correct answer is higher.")
         guessing_times += 1










