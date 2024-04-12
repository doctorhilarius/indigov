import { Router } from 'express'

import {
    getVenues,
    getVenue,
    createVenue,
    updateVenue,
    deleteVenue,
} from './venues.controller'

const router = Router()

router.get('/', getVenues)
router.get('/:id', getVenue)
router.post('/', createVenue)
router.put('/:id', updateVenue)
router.delete('/:id', deleteVenue)

export default router
