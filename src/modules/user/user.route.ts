import express from 'express';
import { UserController } from './user.controller';

const router =express.Router();

router.get('/test',(req,res)=>{
    res.send('hello bappa')
});


router.post('/create-user',UserController.insertIntoDB);
router.post('/profile',UserController.insertOrUpdateProfile);
router.get('/',UserController.getUsers);

export const UserRoutes =router;