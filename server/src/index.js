import 'dotenv/config';
import express from 'express';
import { Swaggiffy } from 'swaggiffy'; // Import Swaggiffy for documentation
import cors from 'cors';
import db from './database';
import authRoute from './routes/auth.routes';
import ownersRoute from './routes/owner.routes';
import vehiclesRoute from './routes/vehicle.routes';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to the Vehicle tracking system APIS',
        client: "Rwanda Revenue Authority",
    })
});

app.use('/api/auth', authRoute);
app.use('/api/owners', ownersRoute);
app.use('/api/vehicles', vehiclesRoute);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("App running on port ...  " + PORT);
})

// Setup Swaggiffy for documentation
new Swaggiffy().setupExpress(app).swaggiffy();
