## shell脚本



### 语法作用

``````shell
file="/home/user/photo.jpg"

${var#pattern}	从左起，删最短匹配 也就删除第一个匹配到的

shortname="${file#*/}"   # -> home/user/photo.jpg

${var##pattern}	从左起，删最长匹配

# 删除路径部分（取文件名）
basename="${file##*/}"    # → photo.jpg

${var%pattern}	从右起，删最短匹配

# 删除扩展名（最短匹配 .jpg）
name="${basename%.jpg}"   # → photo

${var%%pattern}	从右起，删最长匹配

# 删除扩展名（最长匹配）
filename="report.final.draft.txt"
noext="${filename%%.*}"   # → report
``````
### 常用命令

>- find 按要求遍历文件内符合条件的文件，自动遍历内部目录
>- IFS 读取行时，不会因空格换行
>- read 可读区控制台输入，也可以读取文件的内容
>- grep 判断某条件（正则）是否在指定文件内
>- touch 创建文件，按照路径创建
>- xargs 清除内容的首位空格
>- cut -d 类似于js的split -f 1为取第一个被分割符分割的前面的值，-f2- 取被分割后的后面的全部
>- sed 被read读取到的内容可以通过｜管道符传给sed 然后，sed s/这里是条件，规则是，s/正则/要被替换成什么，或者s/内容/替换为
>- \> "文件路径" 意思是将这个路径的文件赋值为空