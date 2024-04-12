import { DataTypes } from 'sequelize'

import db from '../lib/db-connection'

// TODO: separate email, name, and address info into shared models
export interface Constituent {
    readonly addressLine1: string
    readonly addressLine2?: string
    readonly city: string
    readonly dateUpdated: string // ISO DATE string
    readonly email: string
    readonly firstName: string
    readonly id: number
    readonly lastName: string
    readonly middleName: string
    readonly phone?: string
    readonly state: string
    readonly zip: string
}

export type SaveConstituentRequest = Omit<Constituent, 'id' | 'dateUpdated'>

export type UpdateConstituentRequest = Omit<Constituent, 'id'>

const constituentSchema = db.define(
    'Constituent',
    {
        id: {
            autoIncrementIdentity: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        dateUpdated: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        middleName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        addressLine1: {
            type: DataTypes.STRING,
        },
        addressLine2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        // TODO: add date created and modified
    },
    {
        timestamps: false,
    },
)

export default constituentSchema
