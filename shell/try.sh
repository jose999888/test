#!/bin/bash

TARGET="lang.yml"

# 读取第一行
line=$(head -n 2 "$TARGET")

# 从第一个冒号后截取
add=$(echo "$line" | cut -d ':' -f2- | xargs)

echo "$line"
echo "$add"
