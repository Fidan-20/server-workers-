const express=require('express')
const cors=require('cors')

let app=express()
app.use(cors())
const HOST=5000
app.get('/workers',(req,res)=>{
    res.json([ 
     {userName:"sam",id :1 ,age:20},
     { userName:"jane",id :2 ,age:19},
     { userName:"Tom",id :3 ,age:21} 
    ])
    res.send('<h1>hello</h1>')
})
app.listen(HOST,(err)=>{
    if (err){
        console.log(err)
    }
    console.log('localhost'+ HOST)
}
)