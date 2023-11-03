import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
const authRoutes = ["/login"]


export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser")?.value;

    if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
        return NextResponse.redirect(new URL("/profile", request.url))
    }
}