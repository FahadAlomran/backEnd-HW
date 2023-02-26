import express,{Application, Request, Response} from "express"
const app:Application=express();

app.use(express.json())

app.get('/', (req : Request, res:Response) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => res.send(json))
})

const admin=(req:Request,res:Response,next:any)=>{
    if (req.query.admin=="true"){
        console.log('admin');
        next()
    }
    else{
        res.send('soory you are not admin')
    }

}

const fun2=(req:Request,res:Response,next:any)=>{
    res.status(200).json({"name":"put"})
    
}

const  f1=(req:Request,res:Response,next:any)=>{
    console.log('name is fahad');
    next();
}

app.get('/', function (req, res) {

  res.send('Hello World')
})


// app.get('/user/:name',(req,res)=>{

//     res.json({"name":req.params.name})
//     // res.status(200).end()
//     // // res.json({"name":"fahad"})
    
   
// })

app.post('/user',(req,res)=>{
    res.status(200).json({"name":"post"})
})

app.put('/user',f1,fun2)

app.delete('/user',(req,res)=>{
    res.status(200).json({"name":"delete"})
})



//--------------------


app.get('/add/:num1/:num2',(req,res)=>{
    let n1 = parseInt(req.params.num1) 
    let n2 = parseInt(req.params.num2) 
    let totale=n1+n2

    // console.log(n1);
    // console.log(typeof n1);
    res.send('the total is '+ totale )

})
app.get('/sub/:num1/:num2',admin,(req,res)=>{
    let n1 = parseInt(req.params.num1) 
    let n2 = parseInt(req.params.num2) 
    let totale=n1-n2

    // console.log(n1);
    // console.log(typeof n1);
    res.send('the total is '+ totale )
    
})
app.get('/mul/:num1/:num2',(req,res)=>{
    let n1 = parseInt(req.params.num1) 
    let n2 = parseInt(req.params.num2) 
    let totale=n1*n2

    // console.log(n1);
    // console.log(typeof n1);
    res.send('the total is '+ totale )
    
})
app.get('/div/:num1/:num2',(req,res,next)=>{
    if (req.params.num1=='2'){
        next()

    }
    let n1 = parseInt(req.params.num1) 
    let n2 = parseInt(req.params.num2) 
    let totale=n1/n2

    // console.log(n1);
    // console.log(typeof n1);
    res.send( totale.toString() )
    
})

app.listen(3009)
