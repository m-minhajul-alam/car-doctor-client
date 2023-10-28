import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheakOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    // console.log(service);
    const { _id, title, img, price } = service

    const handelChekOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // console.log(name, date);
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        // console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                alert('service booked successfull')
            }
        })
    }
    return (
        <div className="min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Cheak Out: {title}</h1>
                </div>
                <div className=" w-full shadow-2xl bg-base-100">
                    <form onSubmit={handelChekOut}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={"$" + price} name="price" className="input input-bordered" readOnly />
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary btn-block" type="submit" value="Order Confarm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheakOut;