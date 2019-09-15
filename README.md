# Kid Div

An app that teaches kids the basics about stock investments and dividend income with a simple UI that shows basic information about dividend stock that the child or parent may own.

## Planned features

* Current stock price
* Daily increase/decrease in stock price
  * Refreshes automatically on regular interval
* Original investment amount
* Current investment value
* Dividend income information:
  * Dividend payout amount and frequency (the "pay cheque")
  * Total amount of dividend paid out since purchased (the "income")

## Technology stack

* React web frontend
  * Babel for transpilation
  * Webpack to generate package targeting browser
* React Native Android frontend
* GraphQL API backend
* Connectivity to some third-party stock information API
* Web frontend and GraphQL backend served from Node Express

## Iteration Plan

1. Develop React web frontend with state stubbed out, served from Express Node server
2. Develop GraphQL backend with stub data running on Express Node server
3. Integrate with free third-party stock information API (TBD)
4. Develop React Native Android app
