import { Request, Response } from 'express'
import Show from '../shows/show.model'
import Venue from './venue.model'

export const getVenues = async (req: Request, res: Response) => {
    try {
        const venues = await Venue.findAll()
        res.json(venues)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const getVenue = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const venue = await Venue.findByPk(id)
        if (venue) {
            res.json(venue)
        } else {
            res.status(404).json({
                msg: `Venue with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const createVenue = async (req: Request, res: Response) => {
    const { body } = req
    try {
        const venue = await Venue.create({
            name: body.name,
            description: body.description,
        })
        res.json(venue)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const updateVenue = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    try {
        const result = await Venue.update(
            {
                name: body.name,
                description: body.description,
            },
            {
                where: {
                    id,
                },
            },
        )
        if (Number(result) === 1) {
            res.json({
                msg: `Venue with id ${id} updated`,
            })
        } else {
            res.status(404).json({
                msg: `Venue with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const deleteVenue = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await Venue.destroy({
            where: {
                id,
            },
        })
        console.log('Result: ' + result)
        if (result) {
            res.json({
                msg: `Venue with id ${id} deleted`,
            })
        } else {
            res.status(404).json({
                msg: `Venue with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}
