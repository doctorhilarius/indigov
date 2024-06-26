import { Constituent, DownloadForm } from './constituent.models'

// TODO: create a data store interface to abstract the APi layer

export async function getConstituents(
    formData?: DownloadForm,
): Promise<Constituent[]> {
    // TODO: environment vars for domain
    let url = 'http://localhost:8000/api/constituent'
    if (!!formData?.startDateTime) {
        url += `?startDateTime=${formData.startDateTime}`
    }
    if (!!formData?.endDateTime) {
        if (formData.startDateTime) {
            url += '&'
        }
        if (!formData.startDateTime) {
            url += '?'
        }
        url += `endDateTime=${formData.endDateTime}`
    }
    const result: Response = await fetch(url, { method: 'GET' })
    const data: Constituent[] = await result.json()
    return data
}

export async function saveConstituent(
    constituent: Constituent,
): Promise<Constituent> {
    const res = await fetch('http://localhost:8000/api/constituent', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(constituent),
    })
    return await res.json()
}
