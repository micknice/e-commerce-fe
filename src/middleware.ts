import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import {protectedRoutes, authRoutes} from './routes/routes'
// const authRoutes = ["/login"]


export default function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser")?.value;
    // const currentUser = getCurrentUser()

    if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
        console.log('includes')
        return NextResponse.redirect(new URL("/user/account/dashboard", request.url))
    }
    if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
        console.log('includes')
        return NextResponse.redirect(new URL("/user/login", request.url))
    }
}