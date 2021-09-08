# import json <-- still works the same without this?

with open("countries.json") as json_data:
    for entry in json_data:
        print(entry)
