import { RequestHandler } from "express";
import { User } from "../models/user";
import { comparePasswords, hashPassword, signUserToken, verifyUser } from "../services/auth";

export const createUser: RequestHandler = async (req, res, next) => {
    let newUser: User = req.body;
    if (newUser.username && newUser.password) {
        let hashedPassword = await hashPassword(newUser.password);
        newUser.password = hashedPassword;
        let created = await User.create(newUser);
        res.status(201).json({
            username: created.username,
            userId: created.userId,
            fname: created.fname,
            lname: created.lname,
            street: created.street,
            city: created.city,
            state: created.state,
            zip: created.zip,
            phone: created.phone
        });
    }
    else {
        res.status(400).send('Username and password required');
    }
}

export const loginUser: RequestHandler = async (req, res, next) => {
    let existingUser: User | null = await User.findOne({ 
        where: { username: req.body.username }
    });

    if (existingUser) {
        let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);
        
        if (passwordsMatch) {
            let token = await signUserToken(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
}

export const getUser: RequestHandler = async (req, res, next) => {
    let user: User | null = await verifyUser(req);
    let reqId = parseInt(req.params.id);
    if (user && user.userId == reqId) {
    
        let { username } = user;
        res.status(200).json({
            username
        });
    }
    else {
        res.status(401).send();
    }
}