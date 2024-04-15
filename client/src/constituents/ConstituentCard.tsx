import { Constituent } from './constituent.models'

import './ConstituentCard.css'

export default function ConstiuentCard(props: { constituent: Constituent }) {
    const { constituent } = props

    return (
        <div className='card'>
            <div>
                {constituent.firstName} {constituent.middleName}{' '}
                {constituent.lastName}
            </div>
            <div>{constituent.dateUpdated}</div>
            <div>{constituent.email}</div>
            <div>{constituent.addressLine1}</div>
            <div>{constituent.addressLine2}</div>
            <div>
                {constituent.city}, {constituent.state} {constituent.zip}
            </div>
            <div>{constituent.phone}</div>
        </div>
    )
}
