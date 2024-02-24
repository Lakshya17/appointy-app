import { User } from '../models/User.js';

export const signup = async (req, res, next) => {
    const {email} = req.body;
    const password = 'password'

    if(!email){
        return res.json({message: 'Invalid Email', status: 'error'})
    }

    let user = await User.findOne({email});
    if(user){
        return res.json({message: 'User already Exist', status: 'warning'})
    }

    user = new User({email, password});
    user.save()
    .then(() => res.json({message: 'User created', status: 'success'}))
    .catch((err) => res.json({message: 'Error Creating User' , status: 'error'}))
}


export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    if( !email || !password){
        return res.json({message: 'Invalid Email or Password', status: 'error'})
    }

    let user = await User.findOne({email});
    if(user){
        return res.json({message: 'You are logged in', status: 'success'})
    }

    return res.json({message: 'User Not Found', status: 'error'})
}