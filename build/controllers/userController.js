"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.loginUser = exports.createUser = void 0;
const user_1 = require("../models/user");
const auth_1 = require("../services/auth");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newUser = req.body;
    if (newUser.username && newUser.password) {
        let hashedPassword = yield (0, auth_1.hashPassword)(newUser.password);
        newUser.password = hashedPassword;
        let created = yield user_1.User.create(newUser);
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
});
exports.createUser = createUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let existingUser = yield user_1.User.findOne({
        where: { username: req.body.username }
    });
    if (existingUser) {
        let passwordsMatch = yield (0, auth_1.comparePasswords)(req.body.password, existingUser.password);
        if (passwordsMatch) {
            let token = yield (0, auth_1.signUserToken)(existingUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Invalid password');
        }
    }
    else {
        res.status(401).json('Invalid username');
    }
});
exports.loginUser = loginUser;
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield (0, auth_1.verifyUser)(req);
    if (user) {
        let { username } = user;
        res.status(200).json({
            username
        });
    }
    else {
        res.status(401).send();
    }
});
exports.getUser = getUser;
