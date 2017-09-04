var inputText = document.getElementById('inputText');
var orderList = document.getElementById('list');
var btn = document.getElementById('buttonAdd');
var tempDatastorage ;


var database = firebase.database().ref('/');


// add logic 
function addTodoItem()
{
    var textValue = inputText.value;
if(textValue=== '')
{
    alert('enter something in the box')
}
else
{
    database.child('todo').push(inputText.value);
    var textNode = document.createTextNode(textValue);
    var ListItem = document.createElement('li');
    
    var deletebutton = document.createElement('img');
    deletebutton.src = 'images/delete.png';
    deletebutton.style.marginLeft = '7px';
    deletebutton.title = 'Delete';
    deletebutton.setAttribute('onclick','deleteNode(this.parentNode)')
    deletebutton.setAttribute('class','btnFloat')
    var editButton = document.createElement('img');
    editButton.src = 'images/edit.png';
    editButton.title = 'Edit';
    editButton.setAttribute('onclick','editNode(this.parentNode)');
    editButton.setAttribute('class','btnFloat')
    ListItem.appendChild(textNode); 
    ListItem.appendChild(deletebutton);
    ListItem.appendChild(editButton)
    orderList.appendChild(ListItem);
    inputText.value = '';}
   

}
database.child('todo').on('child_added',function(snapshot){

var saveSnapshot = snapshot.val();
saveSnapshot.id = snapshot.key;
render(saveSnapshot)  

}) 

function deleteNode(getlist)
{
    orderList.removeChild(getlist);

}
function editNode(parentText)
{
    tempDatastorage = parentText;
    age = parentText;
    console.log(parentText);
    inputText.value = parentText.childNodes[0].nodeValue;
    btn.src = 'images/tick.png';
    btn.title =  'save';
    btn.setAttribute('onclick','saveNode( inputText.value)')



}

function saveNode( updatedTextValue)
{
    tempDatastorage.childNodes[0].nodeValue = updatedTextValue; 
     btn.src = 'images/add.png';
      btn.title = 'Add'
     btn.setAttribute('onClick',"addTodoItem('inputText');");
     inputText.value = '';

}

// use for slider 
var myIndex = 0;
        carousel();

        function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 900);    
}

function textStyling()
{
    inputText.style.backgroundColor = '#39CCCC';
}

function textStylingRemove()
{
    inputText.style = 'reset';
}
