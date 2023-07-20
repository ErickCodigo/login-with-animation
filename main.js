import {getStorage, PAGES_MAP, saveStorage} from "./const.js";
import './style.css'

document.querySelector('#app').innerHTML = ""

function router(pathname) {
    const page = PAGES_MAP[pathname]
    saveStorage('lastPage', pathname)
    if (page) {
        document.querySelector('#app').innerHTML = page.html
        page?.js(router)
    }
}

function main() {
    const pathname = getStorage("lastPage") || window.location.pathname
    router(pathname)
}

main()
