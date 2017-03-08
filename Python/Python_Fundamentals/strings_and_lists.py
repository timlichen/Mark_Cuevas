''' Find and Replace'''
str = "If monkeys like bananas, then I must be a monkey!"
print str.find("monkeys")       # 3

new_str = str.replace("monkey", "alligator")
print new_str

'''Min and Max'''
# min
x = [2,54,-2,7,12,98]
print min(x)            # -2
# max
print max(x)            # 98

'''First and Last'''
x = ["hello",2,54,-2,7,12,98,"world"]
# print first
print x[0]              # hello
# print Last
print x[7]              # world


'''New List'''
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()                
print x                 # [-3, -2, 2, 6, 7, 10, 12, 19, 32, 54, 98]

first = x[0:5]
print first             # [-3, -2, 2, 6, 7]

last = x[5:]
print last              # [12, 19, 32, 54, 98]

last.insert(0, first)   # [[-3, -2, 2, 6, 7]]

print last              # [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]