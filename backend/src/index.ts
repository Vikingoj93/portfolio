import express from 'express';
import emailsRouter from './routes/emails';
import cors from 'cors';
import {rateLimit} from 'express-rate-limit';

const app = express()

/*const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET','POST'],
    allowedHeaders: ['Content-Type']
}*/

app.use(cors(/*corsOptions*/))

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(express.json())

app.use('/api/emails', limiter)


const port = 4000;

app.use('/api/emails', emailsRouter)

app.listen(port, ()=> console.log(`app running on port  ${port}`))