# appsyncmasterclass-frontend

[![dev](https://github.com/muratkeremozcan/appsyncmasterclass-frontend/actions/workflows/dev.yml/badge.svg)](https://github.com/muratkeremozcan/appsyncmasterclass-frontend/actions/workflows/dev.yml)
[![appsync-frontend](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/count/r8t63u/main&style=plastic&logo=cypress)](https://cloud.cypress.io/projects/r8t63u/runs)

The frontend part of AppSync master class. Uses Vue, Tailwind, and AWS Amplify
for continuous deployment.

```
yarn install --registry https://registry.yarnpkg.com # specify the registry in case you are using a proprietary registry

yarn lint

# no need to have server running for these:
yarn cy:open-ct # for cypress component test runner
yarn cy:run-ct # headless version

# runs the ui and api servers, then opens e2e runner
yarn cy:open-local
yarn cy:run-local  # headless version

# dev deployment
yarn cy:open-dev
yarn cy:run-dev

yarn start # serve the app
```
