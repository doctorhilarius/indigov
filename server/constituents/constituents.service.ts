import { Model } from 'sequelize'

import constituentSchema, {
    Constituent,
    SaveConstituentRequest,
    UpdateConstituentRequest,
} from './constituent.model'

export class ConstituentsService {
    // service to manage constituent data

    // TODO: filter by date updated
    async get(): Promise<Constituent[]> {
        const constituents: Model<any, any>[] =
            await constituentSchema.findAll()
        return constituents.map((c) => c.dataValues) as Constituent[]
    }

    async save(constituent: SaveConstituentRequest): Promise<Constituent> {
        const existing: Model<any, any> | null =
            await constituentSchema.findOne({
                where: {
                    email: constituent.email,
                },
            })

        if (existing) {
            return this.update(existing.dataValues as Constituent, constituent)
        }

        const newConstituent: Model<any, any> = await constituentSchema.create({
            ...constituent,
            dateUpdated: new Date().toISOString(),
        })
        return newConstituent as unknown as Constituent
    }

    async update(
        existing: Constituent,
        updated?: SaveConstituentRequest,
    ): Promise<Constituent> {
        const updatedConstituent: Constituent = {
            ...existing,
            ...(updated || {}),
            dateUpdated: new Date().toISOString(),
        }
        const { id, ...toSave }: Constituent = updatedConstituent

        const result = await constituentSchema.update(
            toSave as UpdateConstituentRequest,
            {
                where: {
                    id: existing.id,
                },
            },
        )

        if (Number(result) !== 1) {
            throw new Error('Constituent update failed')
        }

        return updatedConstituent
    }
}
