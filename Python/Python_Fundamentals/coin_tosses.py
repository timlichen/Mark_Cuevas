# Coin Tosses
import random

def coin_toss():
    coin_tosses = 5000
    heads = 0
    tails = 0
    count = 1

    print "Starting the program ..."

    for coin in range(1, coin_tosses):
        random_num = random.randint(0,1)
        if (random_num == 0):
            heads += 1
            print "Attempt #" + str(coin), ": Throwing a coin ... It's a head! ... Got " + str(heads) + " head(s) so far and " + str(tails) + " tail(s) so far"
        else:
            tails+= 1
            print "Attempt #" + str(coin), ": Throwing a coin ... It's a head! ... Got " + str(heads) + " tails(s) so far and " + str(tails) + " tail(s) so far"
        count += 1
    print "Ending the program. Thank you."


coin_toss()