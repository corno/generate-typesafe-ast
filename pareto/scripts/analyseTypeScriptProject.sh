#!/usr/bin/env bash


if [ -d "../dev" ]
then
    npx analyseTypeScriptProject ../dev/tsconfig.json > /dev/null #only want the errors
fi

npx analyseTypeScriptProject ../pub/tsconfig.json > /dev/null #only want the errors
npx analyseTypeScriptProject ../test/tsconfig.json > /dev/null #only want the errors
