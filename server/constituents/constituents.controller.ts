import { Request, Response } from 'express'
import { Op } from 'sequelize'

import constituentSchema, {
    Constituent,
    SaveConstituentRequest,
} from './constituent.model'
import { ConstituentsService } from './constituents.service'

export async function getConstituents(
    req: Request,
    res: Response,
): Promise<void> {
    // TODO: move this to the constituent service
    const { endDateTime, startDateTime } = req.query

    console.log('PARAMS', req.params)
    try {
        let whereClause:
            | {
                  where?: {
                      dateUpdated: {
                          [Op.gte]?: string
                          [Op.lte]?: string
                      }
                  }
              }
            | undefined

        if (!!startDateTime) {
            whereClause = {
                where: {
                    dateUpdated: {
                        [Op.gte]: startDateTime as string,
                    },
                },
            }
        }

        if (!!endDateTime) {
            if (whereClause) {
                whereClause.where!.dateUpdated[Op.lte] = endDateTime as string
            } else {
                whereClause = {
                    where: {
                        dateUpdated: {
                            [Op.lte]: endDateTime as string,
                        },
                    },
                }
            }
        }

        // TODO: other filters, pagination, and search
        const constituents = await constituentSchema.findAll(whereClause)
        res.json(constituents)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const getConstituent = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const constituent = await constituentSchema.findByPk(id)
        if (constituent) {
            res.json(constituent)
        } else {
            res.status(404).json({
                msg: `Constituent with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export async function saveConstituent(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        // TODO: use zod to validate input
        const constituentRequest = req.body as SaveConstituentRequest
        const constituent = await new ConstituentsService().save(
            constituentRequest,
        )
        res.json(constituent)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export async function updateConstituent(req: Request, res: Response) {
    try {
        // TODO: use zod to validate input
        const constituentToUpdate = req.body as Constituent
        const constituent = await new ConstituentsService().update(
            constituentToUpdate,
        )
        res.json(constituent)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}

export const deleteConstituent = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        // TODO: move this to the constituent service
        const result = await constituentSchema.destroy({
            where: {
                id,
            },
        })
        console.log('Result: ' + result)
        if (result) {
            res.json({
                msg: `Constituent with id ${id} deleted`,
            })
        } else {
            res.status(404).json({
                msg: `Constituent with id ${id} not found`,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Internal server error, contact API administrator',
        })
    }
}
