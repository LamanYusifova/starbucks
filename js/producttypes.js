const productTypes = document.getElementById('productTypes')

let params = new URLSearchParams(location.search)
const name1 = params.get("name1")

const DATA = []

fetch('../db/db.json')
    .then((response) => response.json())
    .then(json => {
        DATA.length = 0
        DATA.push(...json.menus)
        // console.log(data);
        showProductTypes()

    });


function showProductTypes() {
    if(name1) {
        productTypes.innerHTML = ''
    DATA.map(item => {
        item.children.map(items => {
            if (items.name === name1) {
                productTypes.innerHTML += `
                        <p class="text-[#6b6b6b] pb-7 pt-4">Menu / ${items.name} </p>
                        <h3 class="text-[28px] font-bold py-5">${items.name}</h3>
                        ${items.children.map(child => {
                    return `
                                <h4 class="text-[24px] font-bold py-4 mt-4">${child.name}</h4>
                                <div>
                                    <hr class="pb-5" />
                                    <div class="flex smm:justify-evenly lg:justify-normal max-smm:gap-8 flex-wrap lg:gap-8">
                                        ${child.products.map(pro => {
                        return `
                                                <div class="smm:text-center p-4 max-w-[236px] smm:flex smm:flex-col smm:items-center ">
                                                    <div class="max-smxs:max-w-[120px] max-smxs:max-h-[120px]  max-w-[170px] max-h-[170px] xl:w-[130px] xl:h-[130px]">
                                                        <img src="${pro.imageURL}" class="rounded-full object-top" alt="/" />
                                                    </div>
                                                    <p class="text-[20px]">${pro.name}</p>
                                                </div>
                                            `
                    }).join('')}
                                    </div> 
                                </div>
                            `
                }).join('')}
                    `;
            }

        });
    });
    }
}