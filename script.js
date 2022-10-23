var imageslide =[
         
    "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Intel_Core_i9_12900K_CPU_Z_single_thread_alder_lake_drdNBC.jpg",

    "https://www.xda-developers.com/files/2022/08/Samsung-Galaxy-Watch-5-Lifestyle-Shots_21_321889.jpg",

    "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/rtx_4090_qrd.jpg",

    "https://images.livemint.com/img/2022/09/08/original/US-TECHNOLOGY-APPLE-8_1662614195188_1662614195188.jpg",

    "https://hugtechs.com/wp-content/uploads/2020/05/dell-xps-15-xps-17-2020.jpg"

                 ];

                 var i=0;

                 function slides()
                 {
                    document.getElementById("slideimg").src =imageslide[i];

                    if(i<(imageslide.length-1))
                    i++;

                    else i=0;
                 }

                 setInterval (slides,1900);





               //   Cart Section


               const searchProducts=()=>{
                  fetch('https://fakestoreapi.com/products')
                  .then(res=>res.json())
                  .then(data=>showDetails(data))
             
              }
             
             
              const showDetails=(products)=>{
                 const details=document.getElementById('display-card');
                 products.forEach(element => {
                     console.log(element)
                     const ratingStar=ratings(element.rating.rate);
             
                     const div=document.createElement('div');
                     div.classList.add('col')
                     div.innerHTML=`
                     
                     
                       <div class="card ms-4 border-0 shadow  h-100 product">
                         <div class="p-1">
                         <img src="${element.image}" class="card-img-top" alt="..."  height=300 >
                         </div>
                         <div class="card-body">
                           <h5 class="card-title text-center">${element.title}</h5>
                           <p class="card-text">
                           </p>
                           <h5 class="card-text text-center fw-bold">$<span class="sp fw-bold">${element.price}</span></h5>
                           <h5 class="card-text text-center"><span class="sp fw-bold">${ratingStar}</span></h5>
             
                         </div>
                         <div class="footer mx-auto">
                         <button class="btn btn-secondary" onclick="addToCard(${element.id},${element.price})" >Add to Card</button>
                         
                         </div>
                       </div>
                     
                  
                     
                     
                     `
                     details.appendChild(div);
             
             
                 });
                 
             
               
             
             
              }
              let count=0;
              const addToCard=(id,price,newPrice)=>{
                 count=count+1;
                 document.getElementById('total-products').innerHTML=count;
                 updatePrice(price);
                 total();
             
                 
              }
              const total=()=>{
               const price=parseFloat(document.getElementById('price').innerText);
               const deliver=parseFloat(document.getElementById('delivery-charge').innerText);
               const charge=parseFloat(document.getElementById('tax').innerText);
               const shipp=parseFloat(document.getElementById('ship-charge').innerText);
               const total=price+deliver+charge+shipp;
               document.getElementById('total').innerText=total
             
              }
             
              const updatePrice=(price)=>{
               const oldPrice=document.getElementById('price').innerText;
               const oldPriceFloat=parseFloat(oldPrice);
               const newPrice=(price+oldPriceFloat);
               document.getElementById('price').innerText=newPrice.toFixed(2);
               DeliveryCharge(newPrice);
               chargetax(newPrice);
               Shipcharge(newPrice);
              }
             
              const DeliveryCharge=(newPrice)=>{
               let DeliveryCharge;
               if(newPrice<=500) {
                return document.getElementById('delivery-charge').innerText=0;
               }
               if(newPrice>500 && newPrice<800){
                 document.getElementById('delivery-charge').innerText=50
                }
               else if(newPrice>=800)
               {
                 document.getElementById('delivery-charge').innerText=100
               }
             
              
              }
             
              const ratings=(rate)=>{
                 if(rate>=4){
                   return star=` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ${rate}</h3>`
                 }
                else if(rate>=3 && rate<4)
                {
                  return star=` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> ${rate}</h3>`
                }
                else if(rate>=2 && rate<3){
                  return star=` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i> ${rate}</h3>`
                }
                else{
                 return star=` <h3><i class="fas fa-star"></i> ${rate}</h3>`
                }
                
               }
             
               const chargetax=(newPrice)=>{
                 let chargetax;
                 if(newPrice<=500) {
                  return document.getElementById('tax').innerText=0;
                 }
                 if(newPrice>500 && newPrice<800){
                   document.getElementById('tax').innerText=(newPrice*0.15).toFixed(2)
                  }
                 else if(newPrice>=800)
                 {
                   document.getElementById('tax').innerText=(newPrice*0.15).toFixed(2);
                 }
               
                
                }
                const Shipcharge=(newPrice)=>{
                  let Shipcharge;
                  if(newPrice<=500) {
                   return document.getElementById('ship-charge').innerText=0;
                  }
                  if(newPrice>500 && newPrice<800){
                    document.getElementById('ship-charge').innerText=(50)
                   }
                  else if(newPrice>=800)
                  {
                    document.getElementById('ship-charge').innerText=(100);
                  }
                
                 
                 }
             
               const orderProducts=()=>{
                 const details=document.getElementById('details');
                 details.textContent='';
                 const totalPrice=document.getElementById('total').innerText;
                //  if(totalPrice>=500){
                //    return document.getElementById('tax').innerText=100;
                //  }
                //  else if(totalPrice<500){
                //    return document.getElementById('tax').innerText=200;
                //  }

                 const div=document.createElement('div');
                 div.classList.add('shopping')
                 div.innerHTML=`<h4>Your total Shopping : $${totalPrice}</h4>
                 <p>Thanks for Shopping With Us!!!!!</p>
                
               
                 `
             
                 details.appendChild(div)
               }
               
             
               searchProducts();


              