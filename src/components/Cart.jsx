import { useDispatch, useSelector } from "react-redux"
import { products } from "../data/products";
import "../styles/cart.css"
export default function Cart() {
    const cart = useSelector(state => state).cart
    const dispatch = useDispatch()
    const add_prod = id => {
        dispatch({
            type: 'add_prod',
            payload: id
        })  
    }
    const dec_prod = id => {
        dispatch({
            type: 'dec_prod',
            payload: id
        })
    }
    const del_prod = id => {
        dispatch({
            type: 'del_prod',
            payload: id
        })
    }
    const clear_cart = id => {
        dispatch({
            type: 'cleat_cart'
        })
    }
    const getProd = id => {
        return products.find(p => p.id === id)
    }
    return (
        <div className="container">
            <h1 className="text-center mt-5">Cart</h1>
            <hr />
            <button className="btn btn-danger w-100" onClick={()=>clear_cart()}>Clear cart</button>
            <hr />
            <div className="row">
                {
                    cart.map(p => {
                        const prod = getProd(p.id)
                        return (
                            <div key={prod.id} className="row divProd">
                                <img src={prod.src} className="col-4" alt=""/>
                                <div className="col-8">
                                    <div className="m-auto">
                                    <h3>{prod.title}</h3><br />
                                    <button className="btn btn-primary " onClick={() => dec_prod(p.id)}>DEC</button>
                                    <span> {p.qty_prod} </span>
                                    <button className="btn btn-primary " onClick={() => add_prod(p.id)}>INC</button> 
                                    <br />
                                    <br />
                                    <button className="btn btn-danger " onClick={() => del_prod(p.id)}>Delete product</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}