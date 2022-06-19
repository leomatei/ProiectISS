import PropTypes from "prop-types";
import Image from 'next/image'

const ProductList= (products) => {
    return <>
        <ul>
        {products.products.map((product,index)=>{
            return (<li key={product.id} >
                <a className="product" href={`../product/${product.slug}`}>
                    {index+1}.{product.productName}-{product.productDescription}
                    <div className="product__actions">
                        {product.productPrice} lei
                        <Image width="40" height="40" src={product.productPhoto.url}/>
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