/**
 * 链表
 * 
 * @description 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
      请你将两个数相加，并以相同形式返回一个表示和的链表。
      你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  @description 题目解释：就是用代码实现，加法运算，正常手写计算是右侧个位数开始，但是代码是左侧，也就是链表第一个，这样就可以理解进位加1了，满10进1
  而且，数字都是合法素质，不会说，给你个043->[4,3,0]，不会以0开头，这个开头的意思是，数组的结尾不会是0
      
  这个是优化版，这个非常好，这个解题思路
*/

class NodeList{
  constructor(val){
    this.val = val
    this.next = null
  }
}
let l1 = [2,4,3], l2 = [5,6,4]

const _l1 = listToNodeList(l1)
const _l2 = listToNodeList(l2)

function listToNodeList(list){
    const dummy = new NodeList()
    let cur = dummy
    for(item of list){
      cur.next = new NodeList(item)
      cur = cur.next
    }
    return dummy.next
}

function addTwoNumbers(l1,l2){
    const dummy = new NodeList()
    let cur = dummy
    let carry = 0
    while(l1 || l2 || carry){

      if(l1){
        carry += l1.val
        l1 = l1.next
      }
      if(l2){
        carry += l2.val
        l2 = l2.next
      }
      cur.next = new NodeList(carry % 10)
      cur = cur.next
      carry = Math.floor(carry / 10)
    }
    return dummy.next
}

console.log(addTwoNumbers(_l1,_l2))