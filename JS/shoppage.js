var list = 
  [
    {'itemNum':'1','name':'Commodity Name One',
    'price':16000,'img':'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfe9.png'},
    
    {'itemNum':'2','name':'Commodity Name Two',
    'price':17000,'img':'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfea.png'},
    
    {'itemNum':'3','name':'Commodity Name Three',
    'price':13000,'img':'http://assets.stickpng.com/thumbs/5e90a44cc7c8f9000434dd91.png'},
    
    {'itemNum':'4','name':'Commodity Name Four',
    'price':15000,'img':'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfee.png'},

    {'itemNum':'5','name':'Commodity Name Five',
    'price':17000,'img':'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bfe7.png'},
    
    {'itemNum':'6','name':'Commodity Name Six',
    'price':14000,'img':'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c009.png'},
    
    {'itemNum':'7','name':'Commodity Name Seven',
    'price':18000,'img':'http://assets.stickpng.com/thumbs/5e9492ce718e370004ea4da7.png'},
    
    {'itemNum':'8','name':'Commodity Name Eight',
    'price':10000,'img':'http://assets.stickpng.com/thumbs/58767480a6b4d03bb3b81d2d.png'},

    {'itemNum':'9','name':'Commodity Name Nine',
    'price':3000,'img':'https://static.wixstatic.com/media/1f3c0f_59b151f5511d4086af0504a08667319d.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/1f3c0f_59b151f5511d4086af0504a08667319d.webp'},

    {'itemNum':'10','name':'Commodity Name Ten',
    'price':9000,'img':'https://static.wixstatic.com/media/1f3c0f_8db8e156582542988be543ec4842909b.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/1f3c0f_8db8e156582542988be543ec4842909b.webp'},

    {'itemNum':'11','name':'Commodity Name ELeven',
    'price':5000,'img':'https://static.wixstatic.com/media/1f3c0f_73c0243cfbd1446db11b4430986baee4.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/1f3c0f_73c0243cfbd1446db11b4430986baee4.webp'},

    {'itemNum':'12','name':'Commodity Name Twelve',
    'price':8500,'img':'https://static.wixstatic.com/media/1f3c0f_2fb45a4cead94cbb9e26e2447847a65c.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/1f3c0f_2fb45a4cead94cbb9e26e2447847a65c.webp'},
  ]

var alreadyCartItems = [];

function definition(){
    let send = document.querySelector('.sendBtn');
    send.addEventListener('click',sendText);

    let closebtn = document.querySelector('.close');
    closebtn.addEventListener('click',closeTextarea);

    let closebtn2 = document.querySelector('.desclose');
    closebtn2.addEventListener('click',closeTextarea);

    let dialogBtn = document.querySelector('.dialogIcon');
    dialogBtn.addEventListener('click',showTextarea);

    let adjustmentDialog = document.querySelector('.textmsg');
    adjustmentDialog.addEventListener('focus',adjustment);

    let openfilter = document.querySelector('.filter');
    openfilter.addEventListener('click',openfil);

    let colfilter = document.querySelector('.collection div');
    colfilter.addEventListener('click',collectionFilter);

    let prifilter = document.querySelector('.price div');
    prifilter.addEventListener("click",priceFilter)

    let removeBtn = document.getElementsByClassName('deleteSign');
    for(let i=0 ; i<removeBtn.length ; i++){
      let button = removeBtn[i];
      button.addEventListener('click',deleteItem);
    } 

    let itemNumCtrl = document.getElementsByClassName('quantity');
    for(let i=0 ; i<itemNumCtrl.length ; i++){
      let button = itemNumCtrl[i];
      button.addEventListener('change',changeQuantity);
    }
    
    let addCart = document.querySelector('.commodityList');
    addCart.addEventListener('click',addCartFunction);

    let closeCart = document.querySelector('.back');
    closeCart.addEventListener('click',closeCartPage);

    let openCart = document.querySelector('.openCart');
    openCart.addEventListener('click',viewCart);

    let singleCommodity = document.getElementsByClassName('compic');
    for(let i=0 ; i<singleCommodity.length ; i++){
      let button = singleCommodity[i];
      //console.log(button);
      button.addEventListener('click',changePageToCommodity);
    }

    let settleBtn= document.querySelector('.settleBtn');
    settleBtn.addEventListener('click',toCheckOut);
}

function toCheckOut(){
  window.location.href ="paymentPage.html";
}

function changePageToCommodity(e){
    let setItemNum = e.target.dataset.itemcon;
    localStorage.setItem('itemNum',setItemNum);
    document.location.href='commodityPage.html';
}

function viewCart(){
    let opencart = document.querySelector('.cartFunction');
    opencart.style.right = "0px";
}

function closeCartPage(){
    let opencart = document.querySelector('.cartFunction');
      opencart.style.right = "-350px";
  }
  
  //???????????????????????????????????????
  function changeQuantity(e){
    let input = e.target;
    if(input.value <= 1){
      input.value = 1 ;
    }
    amount()
  }
  
  
  //???????????????????????????
  function addCartFunction(e){
    e.preventDefault();
    if(e.target.nodeName === "A" && e.target.dataset.add === "add"){
      //????????????
      let opencart = document.querySelector('.cartFunction');
      opencart.style.right = "0px";
      
      let num = e.target.dataset.itemcon-1;
      let cartList = document.querySelector('.cartList');
      let selcetedItemLI = document.createElement('li');
      // ??????????????????????????????
      let itemName = document.getElementsByClassName('itemName');
      for(let i=0 ; i<itemName.length ; i++){
        if(list[num].name === itemName[i].innerText){
          alert('This item is already in the cart');
         return;
        }
      }
      selcetedItemLI.setAttribute('class','selectedItems');
      selcetedItemLI.innerHTML =
      `
      <img src="${list[num].img}" alt="img">
      <div class="itemInfo">
        <div class="itemName">${list[num].name}</div>
        <div class="itemPrice">NTD :${list[num].price}</div>
        <div class="itemNumCtrl">
          <input type="number" value="1" class="quantity">   
        </div>
      </div>
      <div class="deleteSign" data-btnNUm="${num}">X</div>
      `
      cartList.appendChild(selcetedItemLI);
      addToAlreadyCartItems(num);
      definition();
      amount(); 
    }
  }
  
  function setLocalStorage(){
    localStorage.setItem('selectedItems',JSON.stringify(alreadyCartItems));
  }
  
  function getLocalStorage(){
    let cartItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    
    for(let i=0 ; i<cartItems.length ; i++){
      alreadyCartItems.push(cartItems[i]);
      let cartList = document.querySelector('.cartList');
      let selcetedItemLI = document.createElement('li');
      selcetedItemLI.setAttribute('class','selectedItems');
      selcetedItemLI.innerHTML =
      `
      <img src="${cartItems[i].img}" alt="img">
      <div class="itemInfo">
        <div class="itemName">${cartItems[i].name}</div>
        <div class="itemPrice">NTD :${cartItems[i].price}</div>
        <div class="itemNumCtrl">
          <input type="number" value="1" class="quantity">   
        </div>
      </div>
      <div class="deleteSign" data-btnNUm="${cartItems[i].itemNum-1}">X</div>
      `
      cartList.appendChild(selcetedItemLI);
    }

    definition();
    amount(); 
  }
  
  function addToAlreadyCartItems(num){
      alreadyCartItems.push(list[num]);
      setLocalStorage();
  }
  
  function minusToAlreadyCartItems(btnnum){
      let deleteBtnNum  = parseInt(btnnum);
      deleteBtnNum = deleteBtnNum + 1 ;
      for(let i=0 ; i<alreadyCartItems.length ; i++){
        if(alreadyCartItems[i].itemNum == deleteBtnNum){
          alreadyCartItems.splice(i,1);
        }
      }
      setLocalStorage();
  }

  //????????????
  function amount(){
      let price = document.getElementsByClassName('itemPrice');
      let quantity = document.getElementsByClassName('quantity');
      let subPrice = document.querySelector('.subPrice');
      let subtotal = 0;
    
      for(let i=0 ; i<price.length ; i++){
        let priceEle = parseInt(price[i].innerText.replace('NTD :',''));
        let quantityEle = parseInt(quantity[i].value);
        subtotal += (priceEle * quantityEle);
      } 
      subPrice.innerHTML = `NTD : ${subtotal}`;
      //console.log(subtotal);
  }
  
  //????????????
  function deleteItem(e){
    let deleteBtn = e.target ;
    let btnnum = deleteBtn.dataset.btnnum;
    deleteBtn.parentElement.remove();
    amount(); 
    minusToAlreadyCartItems(btnnum);
  }


function priceFilter(e){
    if(e.target.nodeName === "LI" && e.target.dataset.num === '1'){
        let commodity = document.querySelectorAll('.camera')
        let len = commodity.length;
        for(let i=0 ; i<len ; i++){
            if(commodity[i].dataset.price < 15000){
                commodity[i].style.display = 'none';
            }else{
                commodity[i].style.display = 'block';
            }
        } 
    }else if(e.target.nodeName === "LI" && e.target.dataset.num === '2'){
        let commodity = document.querySelectorAll('.camera')
        let len = commodity.length;
        for(let i=0 ; i<len ; i++){
            if(commodity[i].dataset.price >= 10000 && commodity[i].dataset.price < 15000 ){
                commodity[i].style.display = 'block';
            }else{
                commodity[i].style.display = 'none';
            }
        } 
    }else{
        let commodity = document.querySelectorAll('.camera')
        let len = commodity.length;
        for(let i=0 ; i<len ; i++){    
            if(commodity[i].dataset.price >= 10000  ){
                commodity[i].style.display = 'none';
            }else{
                commodity[i].style.display = 'block';
            }   
        }
    }
}

function collectionFilter(e){
    if(e.target.nodeName === "LI" && e.target.dataset.num === '2'){
        let commodity = document.querySelectorAll('.camera')
        let len = commodity.length;
        for(let i=0 ; i<len ; i++){
            if(commodity[i].dataset.col === 'acc'){
                commodity[i].style.display = 'none';
            }else{
                commodity[i].style.display = 'block';
            }
        } 
    }else if(e.target.nodeName === "LI" && e.target.dataset.num === '3'){
        let commodity = document.querySelectorAll('.camera')
        let len = commodity.length;
        for(let i=0 ; i<len ; i++){
            if(commodity[i].dataset.col === 'camera'){
                commodity[i].style.display = 'none';
            }else{
                commodity[i].style.display = 'block';
            }
        } 
    }else{
        let commodity = document.querySelectorAll('.camera')
        let len = commodity.length;
        for(let i=0 ; i<len ; i++){    
            commodity[i].style.display = 'block';   
        }
    }
}

function openfil(e){
    if(e.target.nodeName === 'SPAN' && e.target.dataset.num === "1" ){
        let filter = document.querySelector(".collection div");
        let judgment = filter.style.display
        if(judgment === 'none'){
            filter.style.display = 'block';
            e.target.textContent = '???';
        }else{
            filter.style.display = 'none';
            e.target.textContent = '+';
        } 
    }else if(e.target.nodeName === 'SPAN' && e.target.dataset.num === "2"){
        let filter = document.querySelector(".price div");
        let judgment = filter.style.display
        if(judgment === 'none'){
            filter.style.display = 'block';
            e.target.textContent = '???';
        }else{
            filter.style.display = 'none';
            e.target.textContent = '+';
        }
    }else if(e.target.nodeName === 'SPAN' && e.target.dataset.num === "3"){
        let filter = document.querySelector(".brand div");
        let judgment = filter.style.display
        if(judgment === 'none'){
            filter.style.display = 'block';
            e.target.textContent = '???';
        }else{
            filter.style.display = 'none';
            e.target.textContent = '+';
        }
    }
}

function adjustment(){
    let des = document.querySelector('.desforenter');
    des.style.display = "flex";
    
    let desdia = document.querySelector('.description');
    desdia.style.display = "none";

    let msgh = document.querySelector('.message');
    msgh.style.height = "340px";
}

function closeTextarea(){
    let dialogClose = document.querySelector('.dialogTextarea');
    dialogClose.style.display = 'none';
}

function showTextarea(e){
    let dialogShow = document.querySelector('.dialogTextarea');
    dialogShow.style.display = 'block';
}

function sendText(){
    let msgbox = document.querySelector('.message');
    let getmsg = document.querySelector('.textmsg');
    let sendmsgdiv = document.createElement('div');
    let sendmsgspan = document.createElement('span');

    sendmsgspan.textContent = getmsg.value;
    msgbox.appendChild(sendmsgdiv);
    sendmsgdiv.appendChild(sendmsgspan);
}

definition();
getLocalStorage();