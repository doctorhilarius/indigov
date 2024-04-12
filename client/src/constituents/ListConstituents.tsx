import { useEffect, useState } from 'react'

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

    console.log(constituents)

    return (
        <>
            <div>TODO: display constituents</div>
            {constituents && constituents.forEach((c) => <div>{c.email}</div>)}
        </>
    )
}
