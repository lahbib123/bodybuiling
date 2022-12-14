import React from "react";
import list from "../images/Dites/list.jpg"
import lunch from "../images/Dites/lunch.jpg";
import oil from "../images/Dites/oil.jpg";
import Forbidden from "../images/Dites/Forbidden.jpg";
import Food from "../images/Dites/Food.jpg";
import { Link, } from "react-router-dom";

function Dites(){
    return(
        <section id="home">   
            <div className="container-fluid px-0">
              <div className="container">
                  <div className="row">
                    <div className="">
                        <h1 className="text-danger display-4 text-center m-4"><strong>Here are the prohibited and permitted foods for bodybuilding :</strong></h1>
                        <h5 className="text-dark  m-2 ">Bodybuilders, whether beginners or professionals, should follow a healthy diet, including specific foods, without violating the recommended calories per day, taking into account to stay away from other foods.</h5>
                        <div className="mt-4">
                            <h5 className="font-weight-bold " ><strong>1- The best foods for bodybuilding: </strong></h5>
                            <p className="m-3">- Meat, poultry and fish.</p>
                            <p className="m-3">- Dairy products, such as yogurt, cottage cheese and low-fat milk.</p>
                            <p className="m-3">- Whole grains, such as bread, oatmeal, quinoa, popcorn, and rice.</p>
                            <p className="m-3">- Fruits, such as oranges, apples, bananas, grapes, pears, peaches, melons, and berries.</p>
                            <p className="m-3">- Vegetables, such as broccoli, spinach, tomatoes, cucumbers, zucchini, peppers and mushrooms.</p>
                            <p className="m-3">- Starchy vegetables, such as potatoes, corn, peas and green beans.</p>
                            <p className="m-3">- Seeds and nuts, such as almonds, walnuts, sunflower seeds, chia seeds and flax seeds.</p>
                            <p className="m-3">- Legumes, such as chickpeas, lentils, beans and fava beans.</p>
                            <p className="m-3">- Oils, such as olive oil, flaxseed oil, and avocado oil.</p>
                                <Link className="navbar-brand fs-2" to="/">
                                    <img src={list} alt="Logo" width="370" />
                                    <img src={lunch} alt="Logo"  width="370" />
                                    <img src={oil} alt="Logo"  width="370" />
                                </Link>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-weight-bold " ><strong>2- Forbidden foods for bodybuilders</strong></h5>
                            <p className="m-3">- Sugars, such as sweets, cakes, soft drinks and canned juices, because of their high calorie content and lack of necessary nutrients.</p>
                            <p className="m-3">- Fried foods, because frying foods, such as potatoes, potato chips and chicken, give them a high percentage of saturated fats, which lead to weight gain, as well as the damage they cause to the heart and blood vessels.</p>
                            <p className="m-3">- Alcohol negatively affects muscle building and slows down the rate at which the body burns fat.</p>
                            <p className="m-3">- Meat, poultry and fish.</p>
                                <Link className="navbar-brand fs-2" to="/">
                                    <img src={Forbidden} alt="Logo" class="rounded float-start" width="550" height="370"/>
                                    <img src={Food} alt="Logo"  width="550" />
                                </Link> 
                        </div>
                        <div className="mt-4">
                            <h5 className="font-weight-bold " ><strong>3- Prohibited foods before exercise</strong></h5>
                            <p className="m-1">In addition, there are foods that should be avoided before going to the gym, because they take a long time to digest, which leads to celiac during exercise, and they include:</p>
                            <p className="m-3">- High-fat foods, such as high-fat meats.</p>
                            <p className="m-3">- High-fiber foods, such as cruciferous vegetables, including broccoli and cauliflower.</p>
                            <p className="m-3 mb-5">- Soft drinks and diet soda.</p>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </section>
    )
}

export default Dites