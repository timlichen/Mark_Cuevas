# odd/even
def odd_even():
    for num in range(1, 2001):
        # num is odd
        if (num % 2 != 0):
            print "Number is", num, ". This is an odd number."
        # num is even
        elif (num % 2 == 0):
            print "Number is", num, ". This is an even number."

# call the function
odd_even()


# multiply
def multiply(my_list, multiply_by):
    arr = [];
    for item in my_list:
        arr.append(item*multiply_by)
        print arr

multiply([1, 2, 3], 5)

