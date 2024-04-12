import { Router } from 'express'

import {
    getShows,
    getShow,
    createShow,
    updateShow,
    deleteShow,
} from './shows.controller'

const router = Router()

router.get('/', getShows)
router.get('/:id', getShow)
router.post('/', createShow)
router.put('/:id', updateShow)
router.delete('/:id', deleteShow)

export default router
