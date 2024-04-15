import { useEffect, useState } from 'react'

import ConstiuentCard from './ConstituentCard'
import './ConstituentForm.css'
import { Constituent } from './constituent.models'
import { getConstituents } from './constituent.service'

export default function ListConstiuents() {
    const [constituents, setConstituents] = useState<
        Constituent[] | undefined
    >()

    useEffect(() => {
        getConstituents().then((constituents) => {
            setConstituents(constituents)
        })
    }, [])

    return (
        <>
            {constituents?.map((c) => (
                <ConstiuentCard constituent={c} key={c.consituentId} />
            ))}
        </>
    )
}
