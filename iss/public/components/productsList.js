import PropTypes from "prop-types";

const ProductList= (products) => {
    return <>
        <ul>
            {console.log(products.products[0])}
        {products.products.map((product,index)=>{
            return (<li key={product.id} >
                <a className="product" href={`../product/${product.slug}`}>
                    {index+1}.{product.productName}-{product.productDescription}
                    <div className="product__actions">
                        {product.productPrice} lei
                        <img width="40" height="40" src={product.productPhoto.url}></img>
                    </div>
                </a>
                </li>)
        })
        }
        </ul>
    </>

}
ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;