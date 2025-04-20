const menuNames = document.getElementById('menuNames')
const menuImgs = document.getElementById('menuImgs')

const data = []

let paramsCopy = new URLSearchParams(location.search)
const name1Copy = params.get("name1")

fetch('../db/db.json')
.then((response) => response.json())
.then(json => {
    data.length = 0
    data.push(...json.menus)
    // console.log(data);
    showMenuNames()
    showMenuImgs()
});

function showMenuNames(){
    menuNames.innerHTML = ''
    data.map(item => {
        menuNames.innerHTML += `
            <h3 class="text-[19px] font-[500] py-4">${item.name}</h3>
                <ul class="text-[#6b6b6b]">
                ${item.children.map(items =>{
                   return  `<li onclick="showProductsTypes()" class="py-2"><a href="../pages/producttypes.htm?name1=${items.name}">${items.name}</a></li>`
                }).join('')
            }
                    
                </ul>
        
        `
    })
}
function showMenuImgs(){
    if(!name1) {
        menuImgs.innerHTML = ''
    data.map(item => {
        menuImgs.innerHTML += `
            <h3 class="text-[24px] font-bold py-5">${item.name}</h3>
                    <hr class="pb-5" />
                    <div class="md:flex md:flex-wrap md:gap-8">
                        
                        ${item.children.map(items => {
                            
                           return `
                        <a href = "../pages/producttypes.htm?name1=${items.name}">
                            <div class="flex items-center gap-3 xs:w-[340px] max-md:py-3">
                                <div class="w-[90px] h-[90px] lg:w-[130px] lg:h-[130px]">
                                    <img src="${items.categoryImageURL}" class=" rounded-full object-top" alt=" /">
                                </div>
                                <p class="text-[20px]">${items.name}</p>
                            </div>
                        </a>
                                `
                        }).join('')
                    }
                        
                        
                    </div>
        
        `
    })
    }
}
