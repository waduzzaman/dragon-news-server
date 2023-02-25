const express =require ('express')
const app =express();
const cors=require('cors');
const port=process.env.PORT || 5000;

// use cors by calling cors function 
app.use(cors());

// create a viable to hold the link : 
const categories=(require('./data/categories.json'))

// create an api: 
app.get('/', (req, res)=>{
    res.send('news API Running');
});

// send the data 
app.get('/news-categories', (req, res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log('Dragon news server running on port', port );
})