class MaxHeap {
  constructor() {
    this.data = [];
  }
  insert(val) {
    this.data.push(val);
    this.bubbleUp();
  }
  extractMax() { 
    const max = this.data[0]; 
    const end = this.data.pop(); 
    if (this.data.length > 0) {
      this.data[0] = end; 
      this.bubbleDown();
    }
    return max;
  }
  peek() {
    return this.data[0];
  }
  bubbleUp() { //计算最大值放在最前面
    let idx = this.data.length - 1; 
    const element = this.data[idx]; 
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.data[parentIdx]; 
      if (element <= parent) break;
      this.data[parentIdx] = element;
      this.data[idx] = parent;
      idx = parentIdx;
    }
  }
  bubbleDown() {  
    let idx = 0;
    const length = this.data.length;   
    const element = this.data[0];   
    while (true) {
      let leftIdx = 2 * idx + 1; 
      let rightIdx = 2 * idx + 2; 
      let swap = null;

      if (leftIdx < length) {
        if (this.data[leftIdx] > element) swap = leftIdx;
      }
      if (rightIdx < length) {
        if (
          (swap === null && this.data[rightIdx] > element) ||
          (swap !== null && this.data[rightIdx] > this.data[swap])
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.data[idx] = this.data[swap];
      this.data[swap] = element;
      idx = swap;
    }
  }
}

// 找最小的 3 个数
function topKSmallest(nums, k) {
  const heap = new MaxHeap();
  for (const num of nums) {
    if (heap.data.length < k) {
      heap.insert(num);
    } else if (num < heap.peek()) {
      heap.extractMax();
      heap.insert(num);
    }
  }
  return heap.data;
}

console.log(topKSmallest([3, 9, 1, 5, 12, 7, 4], 3)); // 输出类似 [4, 3, 1]