import Product from "@/components/Product"

export default function category({params,}: {params: {product: string}}) {
    return (
        <Product product={params.product}/>
    )
}