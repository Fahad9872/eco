// app/single-product/page.js
// আপনার পাথের সাথে পরিবর্তন করুন

import ProductDetail from "./ProductDetail";

export default function SingleProductPage() {
    return (
        // Client Component টি Server Component-এর মধ্যে ব্যবহার করা হলো
        <ProductDetail />
    );
}