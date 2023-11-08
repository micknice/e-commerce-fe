'use client'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {UserType} from '../auth/UserType'


export const useCurrentUser = () => {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const currentUser = Cookies.get("currentUser")
        if(currentUser) {

            setUser(JSON.parse(currentUser))
        }
    }, [])
    return user;
}


export const getCurrentUser = () => {
    let user = Cookies.get("currentUser")

    if (user) {
        return user
    }

}