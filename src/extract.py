import json


with open('./src/Data.json', 'rb') as file:

  item = json.load(file)

  exteriors = item['questionnaire']['aesthetics']['exteriors']
  interiors = item['questionnaire']['aesthetics']['interiors']
  surfaces  = item['questionnaire']['aesthetics']['surfaces']

  for exterior in exteriors:
    print(str(exterior['parameters']['width']) + ' X ' + str(exterior['parameters']['height']))

  for interior in interiors:
    print(str(interior['parameters']['width']) + ' X ' + str(interior['parameters']['height']))

  for surface in surfaces:
    print(str(surface['parameters']['width']) + ' X ' + str(surface['parameters']['height']))
