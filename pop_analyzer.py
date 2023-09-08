a = [1,2,3,4,5]
punc = 2

def analyze():
    for char in a:
        ind = a.index(char)
        if char == punc:
            a.pop(ind)
    return (a)

analyze()

print(a)
        


