# Books

This directory is meant to be a library of current Christian academic thought. 


## Filenames
Files in this directory should be in JSON format. Each filename should follow a schema of book title up to the subtitle (slugified) followed by a dot `.` followed by author first name and author last name (slugified).

So a book titled _People to Be Loved: Why Homosexuality Is Not Just an Issue_ by author Preston Sprinkle would have the following filename:

```
people-to-be-loved.preston-sprinkle.json
```

Keeping this format should make finding a book among the directory simple, preventing duplicates due to filename differences.

## Format
Each book file should be a single JSON object with the following props:

| Property | Description | Required |
| --- | --- | --- |
| title | The title of the book, not including the subtitle | `true` |
| subtitle | The subtitle of the book if it exists | `false` |
| author(s) | An [author](#author) or authors. See explanation below | `true` |
| amazonLink | A URI to the book's Amazon listing. | `true` |
| description | The book's description | `true` |
| topics | A JSON list of topics the book covers. To prevent duplication, ensure that the name exists in topics.csv. If it does, use the existing spelling/format from there. If it does not, add it, and copy it here. | `true` |
| type | Should one of three values: `academic`, `popular`, or `hybrid`. If you're not sure, open an issue or look through a few existing books to get a feel for ranking | _recommended_ |
| imageUri | A link to an image of the book. This is required to be merged, but not required to contribute. See contribution guide. | `true` |
| publisher | The book's publisher | `true` |
| publishedYear | The year the book was published | `true` |

### Author
An author can be a list of Author Objects, or just a single Author Object. An Author is a JSON object with the following props:

| Property | Description | Required |
| --- | --- | --- |
| firstName | The first name of the author | `true` |
| lastName | The last name of the author | `true` |
| title | If the author is a Dr. or Rev. this would be the place to put it | `false` |
| degree | The highest degree the author has been awarded if information available | `false` |
| school | The name of the school that awarded the author the highest degree | `false` |

# Matt's "reading" list
In order to make for clean contributions to this list I am managing the list of the books I have read as well as those I am currently reading separately. All of this information will be compiled as a part of my GraphQL API. However within this repository they are kept at /reading.csv and /read.csv.
As these are a record of my personal study, and I am hard pressed to believe that any contributions from anyone other than my wife or roommates would be beneficial. 
 