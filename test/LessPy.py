keyValue ={1:2, 'name': 'age'}
for x in keyValue.keys():
  print(keyValue[x])

c = {'age':18}
keyValue.update(c)
for (k, v) in keyValue.items():
  print(k,v)

del keyValue[1]
print(keyValue)

createDict = dict(A=10, b='文字')
print(createDict)