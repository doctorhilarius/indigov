import { Request, Response } from 'express'

import Venue from '../venues/venue.model'

import Show from './show.model'

export const getShows = async (req: Request, res: Response) => {
    try {
        Show.belongsTo(Venue, { foreignKey: 'VenueId' })
        const shows = await Show.findAll({
            include: [
                {
                    model: Venue,
                    as: 'Venue',
                },
            ],
        })
        res.json(shows)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const getShow = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const show = await Show.findByPk(id)
        if (show) {
            res.json(show)
        } else {
            res.status(404).json({
                msg: `Show with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const createShow = async (req: Request, res: Response) => {
    const { body } = req
    try {
        const show = await Show.create({
            name: body.name,
            description: body.description,
        })
        res.json(show)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const updateShow = async (req: Request, res: Response) => {
    const { id } = req.params
    const { body } = req
    try {
        const result = await Show.update(
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
                msg: `Show with id ${id} updated`,
            })
        } else {
            res.status(404).json({
                msg: `Show with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const deleteShow = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await Show.destroy({
            where: {
                id,
            },
        })
        console.log('Result: ' + result)
        if (result) {
            res.json({
                msg: `Show with id ${id} deleted`,
            })
        } else {
            res.status(404).json({
                msg: `Show with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}
