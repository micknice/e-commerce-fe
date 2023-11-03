import ProductCategory from "@/components/ProductCategory"

export default function category({params,}: {params: {category: string}}) {
    return (
        <ProductCategory category={params.category}/>
    )
}