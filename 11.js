/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 class ListNode{
    constructor(val){
        this.value = val
        this.next = null
    }
 }
 const listToListNode = (list)=>{
    const dummy = new ListNode(0)
    let cur = dummy

    for(let i = 0;i < list.length; i++){
        const item = list[i]
        cur.next = new ListNode(item)
        cur = cur.next
    }
    return dummy.next
 }
 function listNodeToList(_list){
    const arr = []
    let cur = _list
    while(cur){
        arr.push(cur.value)
        cur = cur.next
    }
    return arr
 }

var addTwoNumbers = function(l1, l2) {
    let _l1 = listToListNode(l1)
    let _l2 = listToListNode(l2)
    const dummy = new ListNode(0)
    let cur = dummy
    let carry = 0
    while(_l1 || _l2 || carry){
        if(_l1){
            carry += _l1.value
            _l1 = _l1.next
        }
        if(_l2){
            carry += _l2.value
            _l2 = _l2.next
        }
        cur.next = new ListNode(carry % 10)
        cur = cur.next
        carry = Math.floor(carry/10)
    }
    return listNodeToList(dummy.next)
};




const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 9 },
    { name: "bananas", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
];

const restock = { };
const sufficient = { };
const result = Object.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? "restock" : "sufficient",
);
console.log(result);
// [{ name: "bananas", type: "fruit", quantity: 5 }]

























