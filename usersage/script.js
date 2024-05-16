fetch('http://localhost:5000/workers')
then((res)=>res.jsom()
)
then((data)=>console.log(data))