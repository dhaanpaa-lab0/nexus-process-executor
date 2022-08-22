#!/usr/bin/env bash
cd ./conductor
npm install $1
cd ..

cd ./executor
npm install $1
cd ..
