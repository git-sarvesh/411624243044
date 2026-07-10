import json
items = [1, 2, 3, 'H1', 'H2', 'H3', True, False, None, 3.14, 'Hello']
items.pop(3)
print(items)
s= set()
s.add(1)
s.add(2)
print(s)
d = {'name': 'John', 'age': 30}
for key, value in d.items():
    print(key, value)



with open('data.json', 'r') as json_file:
    loaded_data = json.load(json_file)
    print("JSON file contents:", loaded_data)

