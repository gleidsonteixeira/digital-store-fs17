
const Product = ({classes, name, image, categoryName, discount, price}) => {
    return (
        <>
            <div className={classes} style={{ width: 'calc(33.333% - 11px)' }}>
                <div className={`bg-white p-4 border-round-sm shadow-3 relative`}>
                    {
                        discount != 0 && (
                            <div 
                                className="absolute font-bold px-3 py-2 border-round-2xl uppercase text-sm" 
                                style={{ backgroundColor: "#E7FF86" }}>
                                    {discount}% off
                            </div>
                        )
                    }
                    <img className="w-full" style={{height: '266px', objectFit: 'contain'}} src={image} alt="Tenis" />
                </div>
                <h6 className="mt-3 text-sm text-500">{categoryName}</h6>
                <h2 className="font-light text-800 mt-2 mb-2">{name}</h2>
                <h2>
                    {
                        discount != 0 && (
                            <del className="font-light text-500 mr-2">R${price}</del>
                        )
                    }
                    R$ {price - ((price / 100) * discount)}
                </h2>
            </div>
        </>
    );
}

export default Product;