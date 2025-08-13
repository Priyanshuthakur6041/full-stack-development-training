//import express package
import express from 'express';
//create app variable
const app = express();
//def port no
const port = 3000;
app.use(express.json());

//api sec star

app.get('/test', (req, res) => {
    res.send("api is up" );
});

app.get('/read-user', (req, res) => {
    let user = {
        'age': 25
    }

if(user==null)
    res.status(400).send('data not found')
else
    res.status(200).send(user)
}
)
//api sec end
//start server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
