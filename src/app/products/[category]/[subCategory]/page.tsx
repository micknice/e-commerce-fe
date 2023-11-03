import ProductSubCategory from '../../../../components/ProductSubCategory'



const products = ({params}: {params: {subCategory: string}}) => {
    return (
        <ProductSubCategory subCategory={params.subCategory}/>
    )

}

export default products