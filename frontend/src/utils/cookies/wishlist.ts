import Cookies, { CookieAttributes } from "js-cookie";
import { COOKIE_EXPIRE, WISHLIST_ID_COOKIE } from "src/const";

/**
 * Get wishlist id from cookies
 */
export const getWishlistId = () => Cookies.get(WISHLIST_ID_COOKIE);

/**
 * Set wishlist id to cookies
 */
export const setWishlistId = (
	wishlistId: string | null,
	options?: CookieAttributes
) => {
	if (!wishlistId) {
		Cookies.remove(WISHLIST_ID_COOKIE);
	} else {
		Cookies.set(
			WISHLIST_ID_COOKIE,
			wishlistId,
			options ?? {
				expires: COOKIE_EXPIRE,
			}
		);
	}
};

/**
 * Delete wishlistId
 * */
export const deleteWishlistId = () => {
	Cookies.remove(WISHLIST_ID_COOKIE);
};
