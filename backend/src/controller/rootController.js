import path from 'path';
import { ROOTDIR } from '../config/config.js';

export const redirectRootHandler = (req, res) => {
    res.redirect('/login');
};

export const getLoginHandler = (req, res) => {
    res.sendFile(path.join(ROOTDIR + "/public/views/login.html"));
};

export const getMainHandler = (req, res) => {
    res.sendFile(path.join(ROOTDIR + "/public/views/main.html"));
};
