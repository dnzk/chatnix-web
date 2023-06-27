import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authenticatedRoutes, unauthenticatedRoutes, accessToken, loginRoute, roomRoute } from "./constants";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(accessToken)?.value;

  if (authenticatedRoutes.includes(request.nextUrl.pathname) && !token) {
    request.cookies.delete(accessToken)
    const response = NextResponse.redirect(new URL(loginRoute, request.url))
    response.cookies.delete(accessToken)
    return response
  }

  if (unauthenticatedRoutes.includes(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL(roomRoute, request.url))
  }
}
