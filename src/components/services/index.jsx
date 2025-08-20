import React from "react";
import ServiceCard from "../serviceCard";
import { ServiceData } from "../../utils/data";

const Services = () => {
    return (
        <section className="services py-5">
           <div className="container text-center">
            <h2 className="mb-4">Our Services</h2>
            <div className="row">
                {
                    ServiceData.map(service => {
                        return (
                            <div className="col-md-4 py-2" key={service.id}>
                                <ServiceCard 
                                    image={service.imgSrc} 
                                    title={service.title} 
                                    description={service.description} 
                                />
                            </div>
                        )
                    })
                }
            </div>
           </div>
        </section>
    );
}
export default Services;