const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const calculator = require('./calculator');

const app = express();

app.use(express.json()); // to grab message body with req.body encoded as JSON
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    res.render('index');
})

app.post('/result', async (req, res) => {
    console.log(req.body);
    const operation = (req.body.operation);
    const firstNumber = (req.body.firstNumber);
    const secondNumber = (req.body.secondNumber);

    
    if(operation === 'add'){
        const simpleCalculator = new calculator(+firstNumber, +secondNumber);
        const outputValue = simpleCalculator.add();

        res.status(200).render('result', {solution: {result: outputValue}});
    }else if(operation === 'product'){
        const simpleCalculator = new calculator(+firstNumber, +secondNumber);
        const answer = simpleCalculator.product();

        res.status(200).render('result', {solution: {result: outputValue}});
    }

    res.send('You Typed An Invalid Number');

});

app.listen(3007, () => {
    console.log('Server is up!!!');
});