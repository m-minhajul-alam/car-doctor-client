import { useEffect, useState } from "react";
import Service from "./ServiceCard";

const Services = () => {
    const [sevices, setServices] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-6 space-y-4">
                <h6 className="text-orange-500 font-bold">Service</h6>
                <h2 className="text-6xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    sevices?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;