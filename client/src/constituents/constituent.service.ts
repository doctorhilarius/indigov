import { Constituent, DownloadForm } from './constituent.models'

// TODO: create a data store interface to abstract the APi layer

export async function getConstituents(
    formData?: DownloadForm,
): Promise<Constituent[]> {
    // TODO: environment vars for domain
    const url = `http://localhost:8000/api/constituent/?endDateTime=${formData?.endDateTime}&startDateTime=${formData?.startDateTime}`
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
