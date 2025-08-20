import React from "react";  
import { MenuData1, MenuData2 } from "../../utils/data";
import MenuCard from "../menuCard";

const Menu = () => {
    return(
        <section className="menu py-5">
            <div className="container text-center">
                <h3 className="py-4">Flavors Crafted for You</h3>
                <div className="row">
                    <div className="col-md-6 text-start">
                        <div className="rwo">
                            {
                                MenuData1.map(item =>{
                                    return (
                                        <div className="col-md-12 py-2" key={item.id}>
                                            <MenuCard 
                                                image={item.imgSrc} 
                                                title={item.title} 
                                                description={item.description} 
                                                price={item.price} 
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                            <div className="rwo">
                            {
                                MenuData2.map(item =>{
                                    return (
                                        <div className="col-md-12 py-2" key={item.id}>
                                            <MenuCard 
                                                image={item.imgSrc} 
                                                title={item.title} 
                                                description={item.description} 
                                                price={item.price} 
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu;