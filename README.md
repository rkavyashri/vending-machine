# Wecolme to Vending Machine

## Introdution 
Vending Machine application to vend the snacks and drinks has the following features
1. which can take currency and sell products
2. Its has an option to cancel the order and get the change 
# Technology 

This application is a written in Node JS - Hapi Framework. It has both frontend screens and backend logic as well. 
## Features/Screens

1. The first screen of the application has an input box to enter the amount, which is validated for the Indian Rupees 10 t0 2000 in correct denomination.
2. On correct denomination, the list of items in the vending is shown in screen, where the user can buy the needed item.
3. Once the buy option is chosen, third is the confirmation screen, where the two options are shown "Get the item", "Cancel order". On clicking "Get the item" the item is dispersed and balance amount is returned. Upon chosing "Cancel order" the paid amount is returned to user.

## Requirements

The project requires [Node v12](https://nodejs.org/).


### Install dependencies

```console
$ npm install
```
### Run the application

Run the application which will be listening on port `3000`. 

- Run the application with the current code

  ```console
  $ node index
  ```
## API

Below is a list of API endpoints with their respective input and output.

### Home 

Endpoint

```text
GET /home
```

Response

```html
Returns the home page html
```

### Items 

Endpoint

```
POST /items
```

Parameters
```json
amount:"amount paid by the user"
```

Response

```html
Returns the cards html page
```

### Confirmation 

Endpoint

```text
Post /item/confirmation/<amount>/<item>
```

Parameters
```
amount:"amount paid by the user"
item:"describes the item chosen by user"
```
Response

```html
Returns the confirmation html page
```
### deliver Item 

Endpoint

```
POST /deliver/<amount>/<item>
```

Parameters
```
amount:"amount paid by the user"
item:"describes the item chosen by user"
```
Response

```html
Returns the delivery html, which has the items picture and remaining amount is returned
```
### Cancel Order

Endpoint

```
POST /cancel/<amount>
```

Parameters
```
amount:"amount paid by the user"
```
Response

```text
Returns the cancellatin message with the amount paid
```

