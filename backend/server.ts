import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});