# stars

# Part 1
x = [4, 6, 1, 3, 5, 7, 25]
for item in x:
    print item * "*"


# Part 2
from types import *

def stars(my_list):
    for item in my_list:
        if type(item) is IntType:
            print item * "*"
        else:
            type(item) is StringType
            print item[0].lower() * len(item)

stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])