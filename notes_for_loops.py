# for loop 
for count in range(0, 5):       # n to n-1
    print "looping - ", count

# loop through a list
my_list = [4, 'dog', 99, ['list', 'inside'], 'Hello World!']
for element in my_list:
    print element

# while loops
count = 0
while count < 5:
    print 'looping - ', count
    count += 1

# break example
for val in "string":
  if val == "i":
    break
  print(val)            # s t r (printed vertically)

# continue example
for val in "string":
  if val == "i":
    continue
  print(val)            # s t r n g (printed vertically)

# pass example
class EmptyClass:
    pass

# else example 
x = 3
y = x
while y > 0:
  print y
  y = y - 1
  if y == 0:
    break
else:
 print "Final else statement"   # 3 2 1 (printed vertically)


'''FUNCTIONS'''

# define function 
def add(a,b):               # define a function called add
  x = a + b
  return x

# declare the function
result = add(3,5)
print result                # 8

# returning values
def say_hi():
  return "Hi"
greeting = say_hi()   # he returned value from say_hi function gets assigned to the 'greeting' variable
print greeting        # this will output 'Hi'
