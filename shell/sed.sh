#!/bin/bash

set -e  # 脚本出错时立即退出
#sed 用法 对文件的操作，或单行字符串操作
#- 简化(Simplify): 使用 `${variable//pattern/replacement}` 替代 命令 `sed` -》变量名 //代表符合条件的全部替换 /是指替换第一个符合条件的，pattern 要找的字符，replace要替换成xx
#   #显示行数

# 这里用到的总结
# 首先目录定义绝对路径，sed是按你要求对读区的内容进行编辑，也就是说你可以用它来替换这一行的空格
#举个例子，你写的内容是。 第一行，然后你想让他把这一行的内容的第字，换成number，那就通过｜管道符传递给sed ，然后写
#正则表达式，一定要加s 也就是这样 's/第/number/' ，中间第字部分区域，也可以写正则表达式来匹配，/后面就是要替换成什么了

#第二点 就是IFS，意思是 可能读取的时候会遇到空格，或者回车什么的，但是等你加了IFS后，他就会把文字中的空格读取为单行

#第三 看到这个while了吗，done后面跟了一个< "文件"，这个意思就是对这个文件进行while

#第四 判断文件是否存在，如果不存在就用touch命令 新建该文件

#第五 cut -d 命令 就相当于js的spilt，将他分离，-fn n就是取被分割后的第几个 1就是 取第一个 -f 1，3 就是取第一 和 第三个 -f2- 就是取第
#二个之后的所有

# 第六 xargs 命令，是用来清除两端空格的，后面了解后，再补充吧 这里是这个作用

#第七 > "文件路径" 意思是清空该文件

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