const count = ref(0)
watchEffect(()=>{
    setTimeout(()=>console.log(count.value))
})

setTimeout(()=>{
    count.value++
},1000)

//考验同步收集依赖