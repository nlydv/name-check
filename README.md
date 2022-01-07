# name-check
A simple NodeJS package that, given a flat list of top-level domain names, queries the [Handshake](https://handshake.org) (HNS) blockchain in order to classify each domain based on its availability in the Handshake root zone.

## Example
Running with the included list of test names
```json
[
  "alpha",
  "beta",
  "gamma",
  "delta",
  "alice",
  "bob",
  "carol",
  "dave",
  "alongenoughstringthatispresumablynotregistered",
  "alongenoughstringthatispresumablynotregisteredandisalsotoolongtobeavaliddomainname"
]
```
returns:
```json
{
  "available": [
    "alongenoughstringthatispresumablynotregistered"
  ],
  "registered": [
    "beta",
    "bob",
    "carol",
    "dave"
  ],
  "reserved": [
    "alpha",
    "gamma",
    "delta",
    "alice"
  ],
  "invalid": [
    "alongenoughstringthatispresumablynotregisteredandisalsotoolongtobeavaliddomainname"
  ]
}

```

## Usage
So, you have a long list of domain names and you want to get the status of each straight from the chain?

### Download
Get this package
```
git clone https://github.com/nlydv/name-check
cd name-check
npm install
```

### Setup
Rename `config.example.json`
```
mv config.example.json config.json
```
and save your node's API keys in `config.json`

### Import
Then, format your list of names as a simple JSON array in the `nameList.json` file. If you're not familiar with JSON, just Google "txt to json list" or something and you'll probably find some online converters.

### Run
```
./index.js
```
or
```
node .
```

## License
This project is licensed under the terms of the MIT license _(see [LICENSE.txt](LICENSE.txt) file published therein)_.
