# Scores and Grades

import random


def scores():

    num_scores = 11
    
    for score in range(1, num_scores):
        random_num = random.random()
        random_num = random.randint(60, 100)    # 60 - 100 (endpoints included)

        # grade of D
        if((random_num > 59) & (random_num < 70)):
            print "Score:", random_num, "; Your grade is D"
        # grade of C
        elif ((random_num > 69) & (random_num < 80)):
            print "Score:", random_num, "; Your grade is C"
        # grade of B
        elif ((random_num > 79) & (random_num < 90)):
            print "Score:", random_num, "; Your grade is B"
        # grade of A
        else:
            print "Score:", random_num, "; Your grade is A"
    
scores()