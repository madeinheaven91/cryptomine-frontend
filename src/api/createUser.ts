import axios from 'axios';
import User from './User'

export default function createUser(userId: number) {
    let user;
    user = {
        userId: userId,
        username: prompt("Enter username"), // Should be fetched from telegram
        link: prompt("Enter link"), // Should be fetched from telegram
        moneyTotal: 100,
        perClick: 1,
        perSecond: 0
    };

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/`, user);
}

