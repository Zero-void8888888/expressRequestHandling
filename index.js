import express from 'express'

const app = express()
app.use(express.urlencoded({ extended: true}));
const port = 8080



app.get('/greet', (req,res) =>{
    const fname = req.query.fname
    const lname =  req.query.lname

    res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Page Title</title>
<meta name='viewport' content='width=device-width, initial-
scale=1'>
<link rel='stylesheet' type='text/css' media='screen'
href='mvp.css'>
</head>
<body>
 <h1> Hello ${fname} ${lname}, enjoy my server!</h1>
</body>
</html>`);

});



app.post('/math', (req,res) =>{
    const op1 = Number(req.body.op1);
    const op2 = Number(req.body.op2);
    const operator = req.body.operator;
    let result;

    if (operator == '+'){
        result = op1 + op2;
    }
    else if (operator == '-'){
        result = op1 - op2;
    }
    else if (operator == '*'){
        result = op1 * op2;
    }
    else if (operator == '/'){
        result = op1/op2;
    }
    res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Page Title</title>
<meta name='viewport' content='width=device-width, initial-
scale=1'>
<link rel='stylesheet' type='text/css' media='screen'
href='mvp.css'>
</head>
<body>
 <h1>  ${op1} ${operator} ${op2} = ${result} </h1>
</body>
</html>`)
})

app.post('/magicball', (req,res) => {
    const messages = [
        "It is certain",
         "Reply hazy, try again",
         "Don’t count on it",
         "It is decidedly so",
         "Ask again later",
          "My reply is no",
          "Without a doubt",
          "Better not tell you now",
          "My sources say no",
           "Yes definitely",
           "Cannot predict now",
           "Outlook not so good",
           "You may rely on it",
           "Concentrate and ask again",
           "Very doubtful",
           "As I see it, yes",
           "Most likely",
           "Outlook good",
           "Yes",
            "Signs point to yes"
    ]

    const rand = Math.floor( Math.random() * messages.length);
    const message =  messages[rand];

    res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Page Title</title>
<meta name='viewport' content='width=device-width, initial-
scale=1'>
<link rel='stylesheet' type='text/css' media='screen'
href='mvp.css'>
</head>
<body>
 <h1>  ${message} </h1>
</body>
</html>`);

})


app.get('/getpicture', (req,res) => {
    const category = req.query.category;
    const pwidth = req.query.pwidth;
    const pheight = req.query.pheight;
    const url = `https://loremflickr.com/g/${pwidth}/${pheight}/${category}`;

    res.send(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Page Title</title>
<meta name='viewport' content='width=device-width, initial-
scale=1'>
<link rel='stylesheet' type='text/css' media='screen'
href='mvp.css'>
</head>
<body>
 <img src= ${url} width= ${pwidth} height= ${pheight}/>
</body>
</html>`)

})



app.get('/', (req,res) => {
   res.sendFile(import.meta.dirname + "/static/index.html", (err) => {
        if(err){
            res.status(404).send("404")
        }
   })

})

app.get('/*path',(req,res) => {
    res.sendFile(import.meta.dirname + "/static" + req.url, (err) =>{
        if(err){
            res.status(404).send("404")
        }
    }
)
})




app.listen(port,(err) => {
    console.log(`Server open on ${port}`)
})
