
const Product = ({classes, name, categoryName, discount, price}) => {
    return (
        <>
            <div className={`bg-white p-4 border-round-sm shadow-3 relative ${classes}`}>
                {
                    discount != 0 && (
                        <div 
                            className="absolute font-bold px-3 py-2 border-round-2xl uppercase text-sm" 
                            style={{ backgroundColor: "#E7FF86" }}>
                                {discount}% off
                        </div>
                    )
                }
                <img className="w-full" src="https://fragatto.com.br/cdn/shop/products/tenis-masculino-sport-ultra-tenis-masculino-sport-ultra-calcados-010-fragatto-520433_800x.webp?v=1686124862" alt="Tenis" />
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
        </>
    );
}

export default Product;