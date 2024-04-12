import cors from 'cors'
import express, { Application } from 'express'

import constituentRoutes from '../constituents/constituent.routes'
import showRoutes from '../shows/show.routes'
import venueRoutes from '../venues/venue.routes'

import config from './config'
import db from './db-connection'

class Server {
    private app: Application

    constructor() {
        // TODO: add authorization
        this.app = express()
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('Database connected')
        } catch (error: any) {
            console.error(error, 'Error connecting to DB')
        }
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('server/public'))
    }

    routes() {
        this.app.use(config.apiPaths.constituent, constituentRoutes)
        this.app.use(config.apiPaths.show, showRoutes)
        this.app.use(config.apiPaths.venue, venueRoutes)
    }

    listen() {
        this.app.listen(config.port, () => {
            console.log(`Server up and running at port: ${config.port}`)
        })
    }
}

export default Server
