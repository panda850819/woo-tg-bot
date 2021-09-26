#!/bin/bash

git add .
git commit -m "update"

git push heroku main
echo "已提交至Heroku"

git push git main
echo "已提交至Github"