import { SubmitHandler, useForm } from 'react-hook-form'

import './ConstituentForm.css'
import { Constituent } from './constituent.models'
import { saveConstituent } from './constituent.service'

export default function SaveConstituentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Constituent>()

    const onSubmit: SubmitHandler<Constituent> = async (data: Constituent) => {
        await saveConstituent(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* TODO: regex validation */}

            <div className='form-field'>
                <label>First Name</label>
                <span>
                    <input
                        {...register('firstName', {
                            required: true,
                        })}
                    />
                    <span className={errors.firstName && 'error'}>*</span>
                </span>
            </div>

            <div className='form-field'>
                <label>Middle Name</label>
                <span>
                    <input {...register('middleName')} />
                </span>
            </div>

            <div className='form-field'>
                <label>Last Name</label>
                <span>
                    <input {...register('lastName', { required: true })} />
                    <span className={errors.lastName && 'error'}>*</span>
                </span>
            </div>

            <div className='form-field'>
                <label>Email</label>
                <span>
                    <input
                        {...register('email', {
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                            required: true,
                        })}
                    />
                    <span className={errors.lastName && 'error'}>*</span>
                    <span className={errors.email && 'error'}>
                        {errors.email?.type === 'pattern' &&
                            errors.email.message}
                    </span>
                </span>
            </div>

            <div className='form-field'>
                <label>Address Line 1</label>
                <span>
                    <input {...register('addressLine1', { required: true })} />
                    <span className={errors.addressLine1 && 'error'}>*</span>
                </span>
            </div>

            <div className='form-field'>
                <label>Address Line 2</label>
                <span>
                    <input {...register('addressLine2')} />
                </span>
            </div>

            <div className='form-field'>
                <label>City</label>
                <span>
                    <input {...register('city', { required: true })} />
                    <span className={errors.city && 'error'}>*</span>
                </span>
            </div>

            <div className='form-field'>
                <label>State</label>
                <span>
                    <input {...register('state', { required: true })} />
                    <span className={errors.state && 'error'}>*</span>
                </span>
            </div>

            <div className='form-field'>
                <label>Zip Code</label>
                <span>
                    <input {...register('zip', { required: true })} />
                    <span className={errors.zip && 'error'}>*</span>
                </span>
            </div>

            <div className='form-field'>
                <label>Phone</label>
                <span>
                    <input {...register('phone')} />
                </span>
            </div>

            <div>
                <input type='submit' />
            </div>
        </form>
    )
}
