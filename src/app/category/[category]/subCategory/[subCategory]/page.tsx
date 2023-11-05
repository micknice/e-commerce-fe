import ProductSubCategory from "@/components/ProductSubCategory"
import ProductCategory from "@/components/ProductCategory"

// export default function category({params,}: {params: {subCategory: string}}) {
//     return (
//         <ProductSubCategory subCategory={params.subCategory}/>
//     )
// }

export default function subCategory({params,}: {params: {category: string, subCategory: string}}) {
    return (
        <ProductCategory category={params.category} subCategory={params.subCategory}/>
    )
}