import express,{Application, Request, Response} from "express"
const app:Application=express();

app.use(express.json())

app.get('/', (req : Request, res:Response) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => res.send(json))
})

app.listen(3009)
