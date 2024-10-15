import express from 'express';
import userRoutes from './controller/userController';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
