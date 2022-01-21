const {MongoClient} = require('mongodb')
const express = require('express')
const app = express();

const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


const uri = "mongodb+srv://leonmher:kepler22bb@cluster0.kc6el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const client = new MongoClient(uri)

async function main () {

    try {
    
       client.connect()
       .then(
           cli=>{
                const db = cli.db("myGuns")
                const col = db.collection("guns")

              
                app.post('/link', (req,res)=>{
                    
                    console.log('worked')
                    res.send('hey')
                
                  col.insertOne((req.body))
                  .then(res=>console.log(res))
                })
                
                app.listen(4999)


           }
       )

        

        

    }


    catch (e)
    
    {
        console.log(e)
        
    } finally {

       await client.close()
    }
}

main().catch(console.error)

