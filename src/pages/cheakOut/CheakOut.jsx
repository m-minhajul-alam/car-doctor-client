import { useLoaderData } from "react-router-dom";

const CheakOut = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, title, service_id, price } = service
    return (
        <div className="min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Cheak Out: {title}</h1>
                </div>
                <div className=" w-full shadow-2xl bg-base-100">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" required />
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