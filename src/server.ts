// Set up your server
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import productRouter from './routes/product.route';
import pageRouter from './routes/page.routes';

// Create a server
const app = express();

// Middleware 
app.use(express.json());

// Routes
app.use('/products', productRouter);
app.use('/', pageRouter);

//Fallback
app.use((req: Request, res: Response) => {
    res.status(404).send('Invalid route!')
  })

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})