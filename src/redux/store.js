import { createStore } from "redux";


const reducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case "add_prod":
            var copy_state1 = { ...state };
            var ind1 = copy_state1.cart.findIndex(p => p.id === action.payload)
            if (ind1 === -1) {
                copy_state1.cart.push({ id: action.payload, qty_prod: 1 })
            }else{
                copy_state1.cart[ind1].qty_prod++
            }
            return copy_state1
        case "dec_prod":
            var copy_state2 = { ...state };
            var ind2 = copy_state2.cart.findIndex(p => p.id === action.payload)
            if (copy_state2.cart[ind2].qty_prod > 1) {
                copy_state2.cart[ind2].qty_prod--
            }else{
                copy_state2.cart.splice(ind2,1)
            }
            return copy_state2
        case "del_prod":
            var copy_state3 = { ...state };
            var ind3 = copy_state3.cart.findIndex(p => p.id === action.payload)
            copy_state3.cart.splice(ind3,1)
            return copy_state3
        case "cleat_cart":
            return { ...state, cart: [] }

        default:
            return state;
    }
}

const store = createStore(reducer)
export default store