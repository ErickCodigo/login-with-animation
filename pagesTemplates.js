import {queryClick} from "./const.js";

const CARD_VALUES = {
    CARD_NUMBER: '4440260000000000',
    CARD_EXPIRY: '02/22',
    CARD_CVV: '123',
}

export const PAYMENT_GATEWAY_PAGE = {
    html: `
      <div>
        <h1>Fake payment gateway</h1>
        <form action="#">
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Card number</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" value="${CARD_VALUES.CARD_NUMBER}">
        </div>
        <div class="mb-3">
         <label for="exampleFormControlInput2" class="form-label">Expiry</label>
          <input type="text" class="form-control" id="exampleFormControlInput2" value="${CARD_VALUES.CARD_EXPIRY}">
        </div>
        <div class="mb-3">
         <label for="exampleFormControlInput2" class="form-label">CVV</label>
          <input type="number" class="form-control" id="exampleFormControlInput2" value="${CARD_VALUES.CARD_CVV}">
        </div>
        <button type="button" class="btn btn-primary">Primary</button>
        </form>
      </div>
    `,
    js: (goTo) => {
        queryClick("button", (ev) => {
            ev.target.innerHTML = 'Processing...'
            setTimeout(() => {
                goTo('/congratulations')
            }, 4000)
        })
    }
}

export const CONGRATS_PAGE = {
    html: `
      <div>
        <h1>Supposedly you already made the purchase :´)</h1>
        <p>Thanks for the new animation!</p>
        <p></p>
        <button type="button" class="btn btn-warning">Return to home</button>
      </div>
    `,
    js: (goTo) => {
        queryClick("button", () => {
            goTo('/')
        })
    }
}
