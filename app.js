const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')

port = 8080
app.listen(8080,() => console.log(`Server started on port ${port}`));



const songs = ['Accidents Will Happen', 'After Youve Gone', 'All Alone', 'All By Myself', 'All I Do Is Dream of You', 'All I Need is the Girl',
         'All My Tomorrows', 'All of Me', 'All of You', 'All or Nothing at All', 'All the Things You Are', 'All the Way', 'All the Way Home',
          'All Through the Day', 'All This and Heaven Too', 'Almost Like Being in Love', 'Always', 'America the Beautiful', 'Among My Souvenirs',
           'And Then You Kissed Me', 'Angel Eyes', 'Anything'];

app.get('/', (req,res) => {
    const getRandomSong = songs[Math.floor(Math.random() * songs.length)];
    res.send(getRandomSong);
});

app.get('/birth_date', (req,res) => {
    res.send('December 12, 1915')
});

app.get('/birth_city', (req,res) => {
    res.send('Hoboken, New Jersey')
});

app.get('/wives', (req,res) => {
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx')
});

app.get('/picture', (req,res) => {
    res.redirect('https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg')
});

app.get('/public', (req,res) => {
    res.send('Everybody can see this page')
});


app.use(basicAuth({
    users: { 'admin': 'admin' },
    challenge: true,
    realm: 'Restricted Area',
    unauthorizedResponse: function() {return "Not authorized."}
    }));
    

    app.get('/protected', (req, res) => {
    res.send("Welcome, authenticated client");
    });
