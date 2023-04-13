# next_bucket extended version of localstorage.

The `next_bucket` package allow the developer to use localstorage effectively with the javascript object, generally it encode the data into base64 encoding while storing and decode the base64 data while retrieving process.

Note: It is designed only for **NextJS** project.

To set object in localstorage:-
```javascript
bucket.setObject("key", {
    "name": "next_bucket"
});
```
To read object from localstorage:-
```javascript
bucket.getObject("key");
```
To delete the localstorage object:-
```javascript
bucket.deleteObject("key");
```
To delete all the object from localstorage:-
```javascript
bucket.clearObjectsAll();
```
To update the data from localstorage:-
```javascript
bucket.updateObject("key", "name", {
    "data_key": "new_data"
});
```