#!/usr/bin/env bash
FN=$1
if [ -z "$FN" ]; then
    echo "Must specify new javascript file without .js extension"
    exit 1
fi

touch ./common/$1.js
cd ./conductor
ln -svf ../common/$1.js
cd ..

cd ./executor
ln -svf ../common/$1.js
cd ..