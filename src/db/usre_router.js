import express from 'express'

import getAllUsers from './user_ctl.js'

const router = new express.Router()
getAllUsers().then(res => {
    console.log(res)
})
router.get('/user', getAllUsers)

export default router
