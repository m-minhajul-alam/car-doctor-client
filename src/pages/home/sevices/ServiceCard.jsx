
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex justify-evenly items-center">
                    <p className="text-xl font-semibold text-orange-500">Price: ${price}</p>
                    <button className="text-xl font-semibold text-orange-500">❯</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;