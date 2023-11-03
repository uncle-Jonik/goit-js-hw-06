const ulEl = document.querySelector("#categories");

// Number of categories: 3
const ulCategoriesEl = ulEl.querySelectorAll('.item')
console.log(`Number of categories: ${ulCategoriesEl.length}`);


const  categoryName= ulCategoriesEl.forEach((element)=>{
    const categoriesName = element.children[0].textContent
    // Category: NAME
    console.log(`Category: ${categoriesName}`);

    const categoriesLength = element.children[1].children.length;
    // Category: LENGTH
    console.log(`Category: ${categoriesLength}`);   
})

