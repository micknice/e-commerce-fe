import ProductSubCategory from "@/components/ProductSubCategory"

export default function category({params,}: {params: {subCategory: string}}) {
    return (
        <ProductSubCategory subCategory={params.subCategory}/>
    )
}