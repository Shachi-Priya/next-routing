import {useRouter} from "next/router";

function ProductDetail(){
    const router=useRouter();
    const prodId=router.query.productId;
    return <h1>Details about product {prodId}</h1>
}

export default ProductDetail;