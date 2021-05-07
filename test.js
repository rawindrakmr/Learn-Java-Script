var obj={'a':1,'b':2,"c":3,"d":4}
 for (var i in obj){
     console.log(i)
 }

 var links = { value : [{"category": "Electronics" ,"link": "https://www.flipkart.com/electronics-big-savings-days-store"},
                        {"category": "Sports","link": "https://www.flipkart.com/mens-footwear-store"},
                        {"category": "Fashion","link": "https://www.flipkart.com/clothing-and-accessories/" } ]};

    for ( var link in links.value){
        console.log(links.value[link].category)
    }

// console.log(links.link1[0])