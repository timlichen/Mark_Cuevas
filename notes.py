'''PRINTING'''

# print using ,
name = "Zen"
print "My name is", name   # adds a space

# print using +
name = "Karma"
print "My name is" + name  # does not add a space

# print 
name_and_int = "Mark" + str(100)    # cannot concatenate a string and an int
print name_and_int                  # need to change int to string

# print interpolation
first = "Zen"
last = "Coder"
print "My name is {} {}".format(first, last)

# soon-to-be-deprecated
hw = "hello %s" % 'world'
print hw


'''USEFUL STRING METHODS'''
# capitalize
name.capitalize()
# lower
name.lower()
# swapcase
name.swapcase()
# upper
name.upper()
# find
name.find("am") # if found, returns index; if not returns -1
# replace
swap_names = "Hello World!"
print swap_names.replace("World", "Kitty")


'''LISTS'''

# Access Values
drawer = ['documents', 'envelopes', 'pens']

#access the drawer with index of 0 and print value
print drawer[0]  #prints documents

#access the drawer with index of 1 and print value
print drawer[1] #prints envelopes

#access the drawer with index of 2 and print value
print drawer[2] #prints pens


# Manipulate Lists 

# append
x = [1,2,3,4,5]
x.append(99)
print x

# insert
x = [1,2,3,4,5]
x.insert(2,99)      # inserts new item at given index
print x             # [1, 2, 99, 3, 4, 5]

# remove
y = [1,2,3,4,3]
y.remove(3)         # remove the first item from the list whose value is provided
print y             # [1, 2, 4, 3]

# pop 
x = [1,2,3,4,5]
x.pop()             # since not specified, removes the last element
print x             # [1, 2, 3, 4]
y = [10,11,12,13,14]
y.pop(1)
print y             # [10, 12, 13, 14]

# sort
x = [99,4,2,5,-3];
x.sort()            # sorts in ascending order (or alphabetically, if string)
print x             # [-3, 2, 4, 5, 99]

# slice
x = [99,4,2,5,-3];
print x[:]          # [99,4,2,5,-3]
print x[1:]         # [4,2,5,-3]
print x[:4]         # [99,4,2,5]
print x[2:4]        # [2,5]


'''BUILT-IN FUNCTIONS'''

# len
my_list = [1, 'Zen', 'hi']
print len(my_list)              # 3 items

# max
my_list = [1, 7, 3]
print max(my_list)              # 7

# min
# When comparing boolean, True == 1; False == 0.
# numbers < dictionaries < lists < strings < tuples 
my_list = [1, 7, 3]
print min(my_list)              # 1

# any
# Returns True if any item in the sequence is True 
my_list = [0, 'hi', '']
print any(my_list)              # True because string is true
my_list = [0, '']
print any(my_list)              # False because 0 and empty string are false

# all 
# Returns True if all items in the sequence are True 
my_list = [0, 'Zen', '']
print all(my_list)              # False (because false, true, false)
my_list = [4, 'hi']
print all(my_list)              # True


'''CONDITIONAL EXPRESSIONS'''
age = 30

if age >= 18:
  print 'Legal age'
elif age == 17:
  print 'One more year and you will be of legal age'
else:
  print 'You are so young!'