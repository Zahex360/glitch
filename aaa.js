const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('./public'));

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');
const hireMeRoutes = require('./routes/hire_me');
const miniGamesRoutes = require('./routes/minigames');
const myBlogARRoutes = require('./routes/myblog-ar');
const thankYouRoutes = require('./routes/thank_you');


// Import the middleware function
const processHireFormMiddleware = require('./hireMeMiddleware');

app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);
app.use('/hire_me', processHireFormMiddleware); //pass the middleware function for the form
app.use('/minigames', miniGamesRoutes);
app.use('/myblog-ar', myBlogARRoutes);
app.use('/thank_you', thankYouRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
