# Test of karma-webpack v5 with webpack 5

This repository contains 3 tests:

* fillBodyjs.spec.js
* fillBodyts.spec.ts
* fillBodytsx.spec.tsx

The tests can be run by:
```
yarn install
yarn start
```

With yarn add https://github.com/ryanclark/karma-webpack#next (currently 5.0.0-alpha.3.0 eec6dfc) the .ts and .tsx tests will fail with the error:

```
23 10 2020 21:23:35.329:ERROR [karma-server]: UnhandledRejection: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
23 10 2020 21:23:35.333:ERROR [karma-server]: TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
    at Hash.update (internal/crypto/hash.js:84:11)
    at Object.sha1 (C:\Users\nick\code\scratch\minimal-karma-webpack\node_modules\karma\lib\utils\crypto-utils.js:9:8)
    at runProcessors (C:\Users\nick\code\scratch\minimal-karma-webpack\node_modules\karma\lib\preprocessor.js:70:26)
```
After running:

```
yarn add https://github.com/appzuka/karma-webpack#next
```

All 3 tests run and pass.

You can switch back to the other repo by typing:
```
https://github.com/ryanclark/karma-webpack#next
```
