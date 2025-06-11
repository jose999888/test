/**
 * 链表
 * 
 * @description 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
      请你将两个数相加，并以相同形式返回一个表示和的链表。
      你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  @description 题目解释：就是用代码实现，加法运算，正常手写计算是右侧个位数开始，但是代码是左侧，也就是链表第一个，这样就可以理解进位加1了，满10进1
  而且，数字都是合法素质，不会说，给你个043->[4,3,0]，不会以0开头，这个开头的意思是，数组的结尾不会是0
      
*/

class ListNode{
  constructor(val,next = null){
    this.value = val
    this.next = next
  }
}

const l1 = [2,4,3], l2 = [5,6,4]


function listToListNode(list){
  const first = new ListNode(0)
  let cur = first

  for(let item of list){
    cur.next = new ListNode(item)
    cur = cur.next
  }
  return first.next
}

const _l1 = listToListNode(l1)
const _l2 = listToListNode(l2)

function addTwoNumbers(l1,l2,carry = 0){
  if(!l1 && !l2 && !carry) return

  let sum = carry

  if(l1){
    sum += l1.value
    l1 = l1.next
  }
  if(l2){
    sum += l2.value
    l2 = l2.next
  }

  return new ListNode(sum % 10,addTwoNumbers(l1,l2,Math.floor(sum/10)))
}

const res = addTwoNumbers(_l1,_l2)

function listNodeToList(node){
  const list = []
  while(node){
    list.push(node.value)
    node = node.next
  }
  return list
}
console.log(listNodeToList(res))