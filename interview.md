# 学习记录文档

> ## 待学习
> - [ ] ci/cd
> - [ ] docker
> - [ ] nginx
> - [ ] webwork是什么
> - [ ] mptt
> - [ ] 微前端
> - [ ] vant 源码

## 一. vite打包

- 动态导入资源和共享资源才会触发chunk函数
- 分包采用manulChunk函数
- build.minify：terser 代码压缩工具（可以去掉console，可以压缩代码
- assetsInlineLimit设置为0，防止静态资源图片被打包成base64
- build.rollupOptions.out.entryFileNames是入口js文件名称，自己设置
- ManualChunk:手动分包，优先级在chunkFilesName函数之上（也就是先手动分包并且定义名字，然后你在chunkFilesName函数上可以拿到你定义好名字的chunk包
- 路由懒加载是路由懒加载，是切换到另一个页面才会加载对应的资源包，并不是分包就等于懒加载
- 路由懒加载后，组件懒加载也是有用的
- Path.resolve(__dirname,’src’)
- 生成的是绝对路径的地址，dirname指的是你当前根目录，src是你要拼接上去的地址
- fileURLToPath作用是 将vite文件路径转化为绝对路径，配合dirname函数，可以获取当前文件所在的目录（绝对路径）

> 需要了解，vite是可以配置多页面应用打包的，也就是打包出来多个html，配置多个打包入口即可（vite官网

## 二. 性能优化的方案

- <mark>缓存，压缩，懒加载</mark>
  - 缓存->浏览器缓存，组件缓存，图片雪碧图，减少请求
  - 代码打包体积压缩
  - 路由懒加载，组件动态引入,图片懒加载
  - 切片，虚拟滚动

## 三. 算法

### 堆
  >- 就是二叉树，一般用数组可以表示堆的存储
  >- 公式<mark>2`*`idx + 1</mark>,右为<mark>2`*`idx + 2</mark>，父节点是<mark>math.floor((i-1)/2)</mark>（确认树的两个腿和父节点位置的公式）
  >- 可以用来查找最大最小值，比如一个数组查找最大的三个数，或最小
  >- <mark>所谓堆，首先他是个二叉树，其次，他不是简单的线性操作，一般要判断某种条件，再执行某种操作，才叫堆</mark>
### 栈
  >- 后进后出，线性，插入与删除都在同侧，比如push，pop
  >- 一般是数组或者链表
### 队列
  >- 先进先出，push，shift
### 哈希表
  >- 无重复的表，例如可以用对象中的key，和map来做哈希判断
### 二分查找
  >- 是一种用于在 <mark>有序数组或序列</mark> 中高效查找目标元素的位置的算法。其核心思想是 每次都将查找范围缩小一半，直到找到目标或范围为空。
### 滑动窗口算法
  >- 定义【left ， right】，遍历+哈希表判断，当存在，就移动左指针，每次计算最长长度

## 四. 手写
  >- 生成器函数，也就是手写set时候，有一个可迭代属性，生成器函数也就是帮你创造可迭代属性的东西
  >- 可迭代属性是拥有next方法，且返回{value,done}，next还有值时候，done：false,没值时为true
  >- 检测是否为可迭代对象
  >- @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
  `````js
      _isIterator(obj){
        return (
            obj&&obj[Symbol.iterator] && typeof obj[Symbol.iterator] === 'function'
        )
    }
    // 生成器函数 本质for of 然后给每一项加next方法
        *[Symbol.iterator](){
        for (const item of this.#_data) {
            yield item
        }
    }
  `````


## 优秀插件
- antfu  eslint插件
- pinia-plugin-persistedstate pinia本地持久化插件