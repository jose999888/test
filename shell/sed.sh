#!/bin/bash

set -e  # 脚本出错时立即退出
#sed 用法 对文件的操作，或单行字符串操作
#- 简化(Simplify): 使用 `${variable//pattern/replacement}` 替代 命令 `sed` -》变量名 //代表符合条件的全部替换 /是指替换第一个符合条件的，pattern 要找的字符，replace要替换成xx
#   #显示行数
TARGET_FILE='lang.yml'
MAIN_LANG='lang/zh.yml'
OTHER_LANG=('lang/en.yml' 'lang/th.yml')

echo "apple banana" | sed 's/apple/orange/'

lines=()
while IFS= read -r file ; do
  deal=$(echo "${file}" | sed 's/第/number/')
  lines+=("${deal}")
done < "lang.yml"

if [ ${#lines[@]} -eq 0 ]; then
  echo "没有新增"
  exit 1
else
  echo "有新增key"
fi

#处理zh.yml 如果没有就新建
[ -f "${MAIN_LANG}" ] || touch "${MAIN_LANG}"

for line in "${lines[@]}";do
  key=$(echo "${line}"| cut -d ':' -f1 | xargs )
  value=$(echo "${line}"| cut -d ':' -f2- | xargs )

  if (! grep -q "^${key}:" "${MAIN_LANG}");then
    echo "${key}: ${value}" >> "${MAIN_LANG}"
    echo "添加了${key}"
    else
      echo "key重复了，已经跳过${key}"
  fi
done

for file in "${OTHER_LANG[@]}";do
  [ -f "${MAIN_LANG}" ] || touch "${MAIN_LANG}"

  for line in "${lines[@]}";do
    key=$(echo "${line}"| cut -d ':' -f1 | xargs )

    if (! grep -q "^${key}:" "${file}");then
      echo "${key}: \"\"" >> "${file}"
      echo "添加了${key}"
      else
        echo "key重复了，已经跳过${key}"
    fi
  done
done

echo "添加成功"
> "${TARGET_FILE}"

echo "文件清空完成"