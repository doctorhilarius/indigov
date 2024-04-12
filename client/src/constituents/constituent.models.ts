// TODO: import this from the server project
export type Constituent = {
    readonly addressLine1: string
    readonly addressLine2?: string
    readonly city: string
    readonly consituentId: number
    readonly dateUpdated: string // ISO DATE string
    readonly email: string
    readonly firstName: string
    readonly lastName: string
    readonly middleName: string
    readonly phone?: string
    readonly state: string
    readonly zip: string
}

export type DownloadForm = {
    readonly endDateTime?: Date
    readonly startDateTime?: Date
}
