import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
	/**
	 *
	 *
	 *
	 * 	This is the Middleware for Products
	 **/
	if (req.nextUrl.pathname.startsWith("/products")) {
		const category = req.nextUrl.searchParams.get("category");
		//
		//
		// if category is not defined, redirect to /categories
		if (!category)
			return NextResponse.redirect(new URL("/categories", req.nextUrl.origin));
		return NextResponse.next();
	}
}

export const config = {
	matcher: "/products/:path*",
};
