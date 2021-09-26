#!/bin/bash

git add .
git commit -m "test"

git push heroku main
echo "已提交至Heroku"

# git push origin main
# echo "已提交至Github"