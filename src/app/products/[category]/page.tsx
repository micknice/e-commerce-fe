import ProductCategory from '../../../components/ProductCategory'



const products = ({params,}: {params: {category: string}}) => {
    return (
        <ProductCategory category={params.category}/>
    )

}

export default products