import { NextResponse } from "next/server";

const isLogin = false;
export const middleware = (request) => {
    const pathname = request.nextUrl.pathname;
    if(pathname.startsWith("/admin")){
        if(!isLogin){
            // chưa đăng nhập --> chuyển hướng về trang chủ // localhost:3000/
            const homeUrl = new URL("/", request.url); // localhost:3000/
            // console.log(request.url) localhost:3000/admin
            console.log(homeUrl.toString());
           return NextResponse.redirect(homeUrl.toString());     // phản hồi khi bấm vào ->> localhost:3000/admin == localhost:3000/
        }
    }
}

/**
 *  request -> middleware --> route --> layout --> Page
 * 
 */