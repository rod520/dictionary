# dictionary

## guidelines
### spelling
spelling uses velthuis romanization. For more info see [wikipedia: velthuis](https://en.wikipedia.org/wiki/Velthuis)
additionally, to try it yourself, try [aksharamukha](https://www.aksharamukha.com/converter) to convert to and from velthuis romanization

### format
entries are .json files that follow this format:
```json
{
  "konkani_word": "template",
  "meaning": ["template"],
  "part_of_speech": "noun",
  "keywords": ["templates"],
  "forms": [
    {  
      "label": "plural",
      "form_value": "templates"
    }
  ],
  "examples": [
    {
      "konkani_sentence": "template bitr gal",
      "english_sentence": "put in the template"
    }
  ],
  "categories": ["template"],
  "status": "draft",
  "note":""
}
```
#### keywords
keywords are used for search. They include the word itself, alternate spellings, english meanings and synonyms of the english meaning. 
Additionally, if the word is close to another language's word, that word should also go there
use your best judgement
### forms
the different forms the entry can take
#### examples
add examples for every form that needs one
use your best judgement
#### nouns
if a nouns has a plural, **add it**  to forms
konkani_word, however, should be the **singular** form
#### verbs
if a verb conjugates irregularly (i.e. ye -> aile), add all forms that conjugate irregularly
additionally, always add the gerund and infinitive (doing and to do, karun and karunk, respectively) if the verb ends in a **vowel**
#### adjectives
add all adjective forms (i.e. boro, bari, bare, or sarlo, saro na)
#### phrases
if a phrase changes depending on the verb/noun/subject/situation, include it
