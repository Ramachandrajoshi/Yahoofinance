# Yaahoo finance api call demo code with 
This project is a sample for processing the Trading APIs from [Yahoo finance](https://finance.yahoo.com/).
this is the demo from v7 of the api.
it has React sample code for selecting different stocks.
this has demo of only parsing the `Option` trades with `Option Pairs`.
calculates maximum Gain and losses by EOD.
You can analyse the code modules for how different states of the codes are segrigated and re used for getting processed outputs.
also it has O^1 logic for finading the `Option Pairs` using Node ES6 coding practices.

## How to run
you have to run 2 applications.

## Server:
its nodejs Express server.
you can run these for server to be up on PORT 4000
`npm install`
`npm start`

## Frontend:
its a react application, runs on PORT: 3000
`cd yahoo-trading`
`npm install`
`npm start`

!HAPPY TRADING!