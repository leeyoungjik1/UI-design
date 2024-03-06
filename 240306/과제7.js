const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    function isProduct(product){
        return product.product_type === 'lipstick' && product.rating > 4 && product.rating < 5
    }
    
    const found = products.filter(isProduct)
    console.log(found)
    // 조건에 맞는 상품을 검색하는 코드 구현하기
})
