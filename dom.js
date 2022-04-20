// // // EXAMINE THE OBJECT //
// // // console.dir(document) //
// // //console.log(document.domain);
// // //console.log(document.URL);
// // //console.log(document.title);
// // // document.title = 123 //
// // //console.log(document.doctype);
// // //console.log(document.head);
// // //console.log(document.body)
// // //console.log(document.all)
 
// // // GET ELEMENTBYID //

// // //console.log(document.getElementById('header-title'))
// // //var headerTitle = document.getElementById('header-title');
// // //console.log('header-title');

// // //headerTitle.textContent = 'hello';
// // // headerTitle.innerText = 'Goodbye';;
// // // console.log(headerTitle.innerText);

// // // GETELEMENTSBYCLASSNAME //
// // //var items =  document.getElementsByClassName('list-group-item');
// // //console.log(items);
// // //console.log(items[1]);
// // ///items[1].textContent = 'Hello selga';
// // //items[2].style.fontWeight = 'bold';
// // //items[3].style.background = 'yellow';
 
// // //for(var  i= 0; i < items.length; i++){
// // //    items[i].style.backgroundColor = 'yellow';
// // //}

// // // GETELEMENTBYTAGNAME //
// // // var li =  document.getElementsByTagName('li');
// // // console.log(li);
// // // console.log(li[1]);
// // // li[1].textContent = 'Hello selga';
// // // li[2].style.fontWeight = 'bold';
// // // li[3].style.background = 'yellow';
 
// // // for(var  i= 0; i < li.length; i++){
// // //     li[i].style.backgroundColor = 'yellow';
// // // }

// // // QUERYSELECTOR //
// // // var  header = document.querySelector('#main-header')
// // // header.style.borderBottom = 'solid 10px black';

// // // var input = document.querySelector('input');
// // // input.value = 'Hello world';


// // // var submit = document.querySelector('input[type="submit"]');
// // // submit.value= "SEND"

// // // var item = document.querySelector('.list-group');
// // // item.style.color = 'red';

// // // QUERYSELECTOR //
// // // var titles =  document.querySelectorAll('.title');
// // // console.log(titles);
// // // titles[0].textcontent = 'Hello';

// // // var odd = document.querySelectorAll('li:nth-child(odd)');
// // // var even = document.querySelectorAll('li:nth-child(even)');

// // // for(var i = 0; i < odd.length; i++){
// // //     odd[i].style.backgroundColor = 'yellow';
// // //     even[i].style.backgroundColor = 'green';
// // // }



// // //TRANVERSING THE DOM
// //     // var itemlist = document.querySelector('#items');
// // //parentnode
// // // console.log(itemlist.parentNode);
// // // itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// // // console.log(itemlist.parentNode.parentNode.parentNode);

// // //parentElement
// // // console.log(itemlist.parentElement);
// // // itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// // // console.log(itemlist.parentElement.parentElement.parentElement);

// // // childNodes

// // // console.log(itemlist.childNodes);

// // // console.log(itemlist.children);
// // // console.log(itemlist.children[1]);

// // // itemlist.children[1].style.backgroundColor = 'yellow';

// // // //Firstchild

// // // console.log(itemlist.firstChild);

// // // //FirstElementchild

// // // console.log(itemlist.firstElementChild)
// // // itemlist.firstElementChild.textContent = 'Hello';

// // // Lastchild
// // // console.log(itemlist.lastChild);
// // // LastElementchild
// // // console.log(itemlist.lastElementchild);
// // // itemlist.lastElementChild.textContent = 'Hello4'

// // // nextSibling

// // // console.log(itemlist.nextSibling);

// // // previous sibling
// // //  console.log(itemlist.previousSibling);

// // // // previousElementSibling
// // // console.log(itemlist.previousElementSibling);


// // //CreateElement

// // //Creat a div
// // // var newDiv = document.createElement('div')

// // // //Create class
// // // newDiv.className = 'hello';

// // // // Add id
// // // newDiv.id = 'hello1';

// // // // Add attr
// // // newDiv.setAttribute('title', 'hello2');

// // // // Create Text node
// // // var newDivText = document.createTextNode('hello world');

// // // // Add text to div

// // // newDiv.appendChild(newDivText);

// // // var container = document.querySelector('header .container');
// // // var h1 = document.querySelector('header h1');

// // // console.log(newDiv);

// // // container.insertBefore(newDiv, h1);

// // //Events

// // var button = document.getElementById('button').addEventListener
// // ('click', buttonClick);

// // function buttonClick(e){
// //     //  console.log('Button Clicked');
// // //  document.getElementById("header-title").textContent = 'Changed';
// // //  document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// //     //console.log(e);

// //     // console.log(e.target);
// //     // console.log(e.target.id);
// //     // console.log(e.target.className);
// //     // var output = document.getElementById('output');
// //     // output.innerHTML = '<h3>'+e.target.id+'</h3>';
    
// //     // console.log(e.type)

// //     // console.log(e.clientX);
// //     // console.log(e.clientY)

// //     // console.log(e.offsetX)
// //     console.log(e.offsetY)
// // } 


//      var button = document.getElementById('button')
//      var box = document.getElementById('box')
//      var select = document.querySelector('select');

 
// // //  button.addEventListener('click', runEvent);
// // //  button.addEventListener('dblclick', runEvent);
// //     // button.addEventListener('mousedown', runEvent);
//     // button.addEventListener('mouseup', runEvent);

//     // box.addEventListener('mouseenter' , runEvent);
//     // // box.addEventListener('mouseleave' , runEvent);

//     // box.addEventListener('mouseover' , runEvent);
//     // // box.addEventListener('mouseout' , runEvent);
//         //  box.addEventListener('mousemove', runEvent)
//     //   var itemInput = document.querySelector('input[type="text"]');
//     //   var form = document.querySelector('form');
      
//     // itemInput.addEventListener('keydown', runEvent);

//     select.addEventlistener('change', runEvent);


//          function runEvent(e){
//            console.log('EVENT TYPE: '+e.type);
//           //  console.log(e.target.value);

//         //    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY
//         //    +'</h3>';
//         //  }
//         //  box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//         //  
//          }
