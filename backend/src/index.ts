import express from 'express';
import { enviarMails } from './routes/emails';
import cors from 'cors';
import {rateLimit} from 'express-rate-limit';
import { PORT, URL_FRONTEND } from './libs/config';
import emailsSchema from './validations/emailsSchema';

const router = express.Router();

const app = express()

const corsOptions = {
    origin: URL_FRONTEND,
    methods: ['GET','POST'],
    allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions))

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(express.json())
app.use(router)

app.use('/api/emails', limiter)

router.post('/api/emails', emailsSchema, enviarMails)

app.listen(PORT, ()=> console.log(`app running on port  ${PORT}`))