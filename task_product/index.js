let formulario = document.getElementById('product-form')
formulario.addEventListener('submit',(e)=>{
    
    
   let name = document.getElementById('name').value;
   let price = document.getElementById('price').value;
   let year = document.getElementById('year').value;
   e.preventDefault();

   //console.log(name, price, year);
   //console.log(new Product(name, price, year))
   let inter = new UI();
   inter.addProduct(new Product(name, price, year));
   inter.clearproduct(); 
})

class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class UI{

    addProduct(product){
        let productlist = document.getElementById('product-list');
        let element = document.createElement('div');
        element.innerHTML =`
        <div class='card text-center mb-4'>
            <div class='card-body row'>
               <div class='col-md-11'>
                   <strong>name: ${product.name}</strong>
                   <strong>price: ${product.price}</strong>
                   <strong>year: ${product.year}</strong>
               </div> 
               <div class='col-md-1'>
               <a href="#" class='btn btn-danger' name='delete'>
               delete
             </div>   
         </div>
        </div> `;
            productlist.appendChild(element);
    }
    deleteproduct(){}
    clearproduct(){
        document.getElementById('product-form').reset();
    }
    showMessage(){}
}