# GeoNames - alternate names

The [GeoNames](https://www.geonames.org/) geographical database covers all countries and contains over eleven million placenames that are available for download free of charge.

These geodata alternate names must be downloaded in this folder if you want to contribute on the geodata used in that project:

- [Iran](./IR.txt) downloaded from [geonames dump](https://download.geonames.org/export/dump/alternatenames/IR.zip)
- [Afghanistan](./AF.txt) downloaded from [geonames dump](https://download.geonames.org/export/dump/alternatenames/AF.zip)
- [Turkmenistan](./TM.txt) downloaded from [geonames dump](https://download.geonames.org/export/dump/alternatenames/TM.zip)
- [Pakistan](./PK.txt) downloaded from [geonames dump](https://download.geonames.org/export/dump/alternatenames/PK.zip)

## Usage

The data format is tab-delimited text in utf8 encoding.

Tables have the following fields:

- alternateNameId : the id of this alternate name, int
- geonameid : geonameId referring to id in table 'geoname', int
- isolanguage : iso 639 language code 2- or 3-characters; 4-characters 'post' for postal codes and 'iata','icao' and faac for airport codes, fr_1793 for French Revolution names, abbr for abbreviation, link to a website (mostly to wikipedia), wkdt for the wikidataid, varchar(7)
- alternate name : alternate name or name variant, varchar(400)
- isPreferredName : '1', if this alternate name is an official/preferred name
- isShortName : '1', if this is a short name like 'California' for 'State of California'
- isColloquial : '1', if this alternate name is a colloquial or slang term. Example: 'Big Apple' for 'New York'.
- isHistoric : '1', if this alternate name is historic and was used in the past. Example 'Bombay' for 'Mumbai'.
- from : from period when the name was used
- to : to period when the name was used

### main language codes

- fa: persian
