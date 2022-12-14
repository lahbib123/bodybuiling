import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { products } from "../data/products";
function Products() {
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()
    const add_prod = id => {
        dispatch({
            type: 'add_prod',
            payload: id
        })
    }
    return (
        <section id="Products">
            <div className="container p-0" id="cities">
                <h2 className="mt-4 text-center">DO NOT MISS !</h2>
                <p className="fs-5 text-center">ATTEINDRE SES OBJECTIFS </p>
                <div className="container  my-5  text-center">
                    <button className="btn btn-danger" to="Page/Contacte.html" onClick={()=> setFilter("")}>All </button>
                    <button className="btn btn-danger mx-4" to="Page/Contacte.html" onClick={()=> setFilter("PROTINE")}>PROTINE</button>
                    <button className="btn btn-danger me-4" to="Page/Contacte.html" onClick={()=> setFilter("DIET")}> DIET </button>
                    <button className="btn btn-danger me-4" to="Page/Contacte.html" onClick={()=> setFilter("CRONO")}>CRONO </button>
                    <button className="btn btn-danger " to="Page/Contacte.html" onClick={()=> setFilter("CEINTURE")}>CEINTURE </button>              
                </div>
                <div className="row bd-highlight mb-3">
                    {
                        products.filter(p =>  p.type.indexOf(filter) !== -1 ).map(p => {
                            return (
                                <div className="col-4 mb-3" key={p.id}>
                                    <div className="card w-75">
                                        <img className="card-img-top" src={p.src} alt="volume" height={300} />
                                        <div className="card-body">
                                            <h4 className="card-title">{p.title}</h4>
                                            <button onClick={() => add_prod(p.id)} className="btn btn-danger">
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Products