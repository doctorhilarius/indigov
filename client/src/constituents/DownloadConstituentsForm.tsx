import { useState } from 'react'
import { CSVLink } from 'react-csv'
import { SubmitHandler, useForm } from 'react-hook-form'

import './ConstituentForm.css'
import { Constituent, DownloadForm } from './constituent.models'
import { getConstituents } from './constituent.service'

export default function DownloadConsitituentsForm() {
    const { register, handleSubmit } = useForm<DownloadForm>()

    const [csvData, setCsvData] = useState<Constituent[]>()
    const [endDateTime, setEndDateTime] = useState<Date | undefined>()
    const [startDateTime, setStartDateTime] = useState<Date | undefined>()

    const onSubmit: SubmitHandler<DownloadForm> = async (
        data: DownloadForm,
    ) => {
        console.debug('data', data)
        const constituents = await getConstituents(data)
        setCsvData(constituents)
        setEndDateTime(data.endDateTime)
        setStartDateTime(data.startDateTime)
    }

    return (
        <>
            {/* TODO: use a date picker */}
            {!csvData && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-field'>
                        <label>Start Datetime</label>
                        <span>
                            <input
                                {...register('startDateTime')}
                                placeholder='YYYY-MM-DD'
                            />
                        </span>
                    </div>

                    <div className='form-field'>
                        <label>End Datetime</label>
                        <span>
                            <input
                                {...register('endDateTime')}
                                placeholder='YYYY-MM-DD'
                            />
                        </span>
                    </div>

                    <div>
                        <input type='submit' />
                    </div>
                </form>
            )}

            {csvData && (
                <CSVLink
                    data={csvData}
                    filename={`${startDateTime}${!!startDateTime && !endDateTime ? '-' : ''}${!!startDateTime && !!endDateTime ? ' to ' : ''}${endDateTime}${!!endDateTime ? '-' : ''}constituents.csv`}
                    onClick={() => setCsvData(undefined)}
                >
                    Click to Download {'>>'}
                </CSVLink>
            )}
        </>
    )
}
