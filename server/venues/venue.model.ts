import { DataTypes } from 'sequelize'
import db from '../lib/db-connection'

const Venue = db.define(
    'Venue',
    {
        VenueId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        Name: {
            type: DataTypes.STRING,
        },
        Street: {
            type: DataTypes.STRING,
        },
        City: {
            type: DataTypes.STRING,
        },
        State: {
            type: DataTypes.STRING,
        },
        Zip: {
            type: DataTypes.STRING,
        },
        Phone: {
            type: DataTypes.STRING,
        },
        URL: {
            type: DataTypes.STRING,
        },
        Description: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    },
)

export default Venue
