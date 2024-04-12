import { DataTypes } from 'sequelize'

import db from '../lib/db-connection'

const Show = db.define(
    'Show',
    {
        ShowId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        VenueId: {
            type: DataTypes.INTEGER,
        },
        StartDateTime: {
            type: DataTypes.DATE,
        },
        Title: {
            type: DataTypes.STRING,
        },
        Description: {
            type: DataTypes.STRING,
        },
        Solo: {
            type: DataTypes.BOOLEAN,
        },
        Tour: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        timestamps: false,
    },
)

export default Show
