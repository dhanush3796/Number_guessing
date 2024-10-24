import random
lower_bound=1
upper_bound=100
max_limit=10
tar_num=random.randint(lower_bound,upper_bound)
for attemp in range(max_limit):
    guess=int(input(f"Enter a number between {lower_bound} and {upper_bound}"))
    if guess<tar_num:
        print("to low....")
    elif guess>tar_num:
        print("to high...")
    else:
        print("Congratulation correct number")
        break
else:
    print("Sorry you have completed maximum limit ")