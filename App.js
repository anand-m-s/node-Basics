const express = require('express')

//express App

const app = express();

//Register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

const blogs = [
    {title : 'An Embodied Mind Can Help Fight Cancer',snippet : 'Mental imagery plays a core role in many health disorders and plays an increasingly important role in their treatment. The healing power of mental imagery can be considerable.'},
    {title : 'KEY',snippet : 'meditate ,listen to musiq ,gain consciousness'},
    {title : 'The Conscious Robot: Benefits and Risks',snippet : 'Tools and technology are designed to make our lives better, but have they?'},
];

app.get('/', (req, res) => {
    res.render('index',{title: 'Home', blogs });
})

app.get('/about', (req, res) => {
  res.render('about',{title: 'about'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title: 'Create a new blog'})
})

//404 
app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
})

