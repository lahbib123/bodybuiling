import React from "react";
import chest from "../images/Exercises/chest.jpg"
import biceps from "../images/Exercises/biceps.jpg";
import abs from "../images/Exercises/abs.jpg";
import shoulder from "../images/Exercises/shoulder.jpg";
import legs from "../images/Exercises/legs.jpg";
import { Link, } from "react-router-dom";
function Exercises(){
    return(
        <section id="Exercises">   
            <div className="container-fluid px-0">
              <div className="container">
                  <div className="row">
                    <div className="">
                        <h1 className="text-danger display-4 text-center m-4"><strong>Full 4 day bodybuilding workout schedule:</strong></h1>
                        <p className="text-dark  m-2">Below you will find a complete four-day workout schedule with the best basic exercises to amplify all muscles, arranged well and with pictures.Below you will find a complete four-day workout schedule with the best basic exercises 
                                        to amplify all muscles, arranged well and with pictures.</p>
                        <h5 className="font-weight-bold m-3" >1- <strong>Day 1: </strong>Chest and triceps exercises.</h5>
                        <h5 className="font-weight-bold m-3" >2- <strong>Day 2: </strong>Back and bicep exercises.</h5>
                        <h5 className="font-weight-bold m-3" >3- <strong>Third day: </strong>rest.</h5>
                        <h5 className="font-weight-bold m-3" >4- <strong>Fourth day: </strong>shoulder and abdominal exercises.</h5>
                        <h5 className="font-weight-bold m-3" >5- <strong>Fifth day: </strong>leg exercises (thigh and calf muscles).</h5>
                        <h5 className="font-weight-bold m-3" >6- <strong>Sixth day: </strong>rest.</h5>
                        <h5 className="font-weight-bold m-3" >7- <strong>Seventh day: </strong>rest.</h5>
                        <div className="mt-4">
                            <h2 className="text-center text-danger">First day :</h2>
                            <h5 className="font-weight-bold m-3 text-center" ><strong><u>Basic exercises for the chest and triceps: </u></strong> On the first day of this training schedule, you will focus on the triceps muscles (upper, middle and lower) and the triceps muscle. In this table, you will find two of the best triceps exercises, which are very effective for targeting all these heads. Thus, the muscle is enlarged.
                                                    On the first day of this training schedule, you will focus on the triceps muscles (upper, middle and lower) and the triceps muscle. In this table, you will find two of the best triceps exercises, which are very effective for targeting all these heads. Thus, the muscle is enlarged.</h5>
                                <Link className="navbar-brand fs-2" to="/">
                                    <img src={chest} alt="Logo" className="rounded mx-auto d-block" width="700" height="550"/>
                                </Link>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-center text-danger mt-3">the second day :</h2>
                            <h5 className="font-weight-bold m-3 text-center" ><strong><u>Exposing the back and biceps inflating exercises :</u></strong> On the second day, you will focus on training the back muscle, including the lats and triceps muscles, in addition to biceps exercises.</h5>
                            <Link className="navbar-brand fs-2" to="/">
                                    <img src={biceps} alt="Logo" className="rounded mx-auto d-block" width="700" height="550"/>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-center text-danger mt-3">the fourth day :</h2>
                            <h5 className="font-weight-bold m-3 text-center" ><strong><u>Shoulder and abdominal exercises :</u></strong> On the second day, you will focus on training the back muscle, including the lats and triceps muscles, in addition to biceps exercises.</h5>
                            <Link className="navbar-brand fs-2" to="/">
                                    <img src={abs} alt="Logo" class="rounded float-start" width="625" height="570"/>
                                    <img src={shoulder} alt="Logo" class="rounded float-end" width="625" height="570"/>
                            </Link>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-center text-danger mt-3">The fifth day :</h2>
                            <h5 className="font-weight-bold m-3 text-center" ><strong><u>The best exercises to inflate the legs and thighs and calves :</u></strong> On the fifth day of the following schedule, you will do some exercises for the lower body, which are the muscles of the legs, thigh and calf.</h5>
                            <Link className="navbar-brand fs-2" to="/">
                                    <img src={legs} alt="Logo" class="rounded mx-auto d-block mb-2" width="750" height="550"/>
                            </Link>
                        </div>    
                    </div>
                  </div>
              </div>
            </div>
        </section>
    )
}

export default Exercises