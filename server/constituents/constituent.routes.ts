import { Router } from 'express'

import {
    getConstituents,
    getConstituent,
    deleteConstituent,
    saveConstituent,
    updateConstituent,
} from './constituents.controller'

const router = Router()

router.get('/', getConstituents)
router.get('/:id', getConstituent)
router.post('/', saveConstituent)
router.put('/:id', updateConstituent)
router.delete('/:id', deleteConstituent)

export default router
