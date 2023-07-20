import {CONGRATS_PAGE, PAYMENT_GATEWAY_PAGE} from "./pagesTemplates.js";

export const PAGES_MAP = {
    '/': PAYMENT_GATEWAY_PAGE,
    '/congratulations': CONGRATS_PAGE,
}

export const queryClick = (selector, callback) => {
    document.querySelector(selector).addEventListener('click', callback)
}

export const saveStorage = (key, value) => {
    localStorage.setItem(key, value)
}

export const getStorage = (key) => {
    return localStorage.getItem(key)
}