import express from 'express'
import { get } from 'mongoose'
import morgan from 'morgan'
import pkg from '../package.json'

import productsRoutes from './routes/products.routes'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.set('pkg', pkg)

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        license: app.get('pkg').license
    })
})

app.use('/products', productsRoutes)

export default app;
