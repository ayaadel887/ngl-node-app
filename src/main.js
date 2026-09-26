import express from 'express';

const app = express();


 //parse incoming request from buffer to object
app.use(express.json());

//routs navigate to feature

///global err handler
app.listen(3000, () => console.log('Server is running on port 3000'));
