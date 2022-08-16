import Cookies, { CookieAttributes } from "js-cookie";
import { CART_ID_COOKIE, COOKIE_EXPIRE } from "src/const";

/**
 * Get cart id from cookies
 */
export const getCartId = () => Cookies.get(CART_ID_COOKIE);

/**
 * Set cart id to cookies
 */
export const setCartId = (
	cartId: string | null,
	options?: CookieAttributes
) => {
	if (!cartId) {
		Cookies.remove(CART_ID_COOKIE);
	} else {
		Cookies.set(
			CART_ID_COOKIE,
			cartId,
			options ?? {
				expires: COOKIE_EXPIRE,
			}
		);
	}
};

/**
 * Delete cartId
 * */
export const deleteCartId = () => {
	Cookies.remove(CART_ID_COOKIE);
};
