# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.0] — 2021-10-09

### Added

- Start integration of the english version done by Warner & Warner;
- Introduction of Python Jupyter notebooks for data hydratation and future machine learning development.

## [1.1.0] — 2021-08-30

### Added

- Geodata features :

  - Be able to display geodata that has been associated to an episode. You can see it in action here: [Feridoun - episode #1 (French version)](https://www.lelivredesrois.com/fr/06-feridoun/01-avenement-de-feridoun-au-trone/) (the map is displayed at the bottom)

  - Be able to display geodata that has been associated with a term in the lexicon. You can see it in action here: [Amol](https://www.lelivredesrois.com/fr/tag/Amol)

  - Only one place can be displayed in this version, but what is planned is to be able to display multiple places on the same map. Then, once all episodes will be indexed with geodata, a reverse search tool will be provided that will enable to search from a given point of interest on the map, all related text of the Shahnahme (idea inspired by the great work of [Shahnameh-GIS project](https://github.com/farikarimi/shahnameh-gis)).

- Lexicon features ([French lexicon version](https://www.lelivredesrois.com/fr/tags)):

  - Be able to search a term thanks to fuzzy logic: type at least three letters in any order. For example if you look for `zaratushtra`, type `zrt` and you will get `zoroastre`.

  - Each term in the lexicon has a font size that represents how many times it is found in the Shahnahme, so that you can immediately draw a mental representation of the point of interests in the Shahnahme.

  - Each term is clickable. When you click on a term it will bring you to a page that gives an explanation on that term plus all the linked episodes and all the geodata associated with it. For example if you click on [Ahriman](https://www.lelivredesrois.com/fr/tag/Ahriman), you will get an explanation of the duality between `Ahriman` and `Ormuzd (Ahura Mazda)`.

    - Not all terms have an explanation: building a lexicon is very hard, and what has been done so far for the French version, has been generated only manually and there are still a lot of `holes` due to my lack of knowledge. Contributors would be highly appreciated on that part.

- Project managment features

  - A [stat's dashboard](https://github.com/hdorgeval/le-livre-des-rois/blob/master/stats/fr/stats.fr.md) is provided to follow up the French version.

## [1.0.0] — 2021-07-27

### Added

- feat(shahnahme): isolate French version in order to be able to add other languages in the future
