// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//------------------------------------------------
// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1></h1>`;
//--------------------------------------------------------

let bt1=document.getElementById('b1');

let bt2=document.getElementById('b2');
//let x=tt1.value;

bt1.addEventListener('click',func1);


bt2.addEventListener('click',func2);

function func1()
{
  let x=parseInt(document.getElementById('t').value);
  if(x<10)
  {
  x=x+1;
  document.getElementById('t').value=x;
  
  }
  else if(x>=10)
  {
    document.getElementById('b1').disabled=true

  }
  else
  {
    document.getElementById('b1').disabled=true
  }
}
function func2()
{
  let x=parseInt(document.getElementById('t').value);
  if(x>0)
  {
  x=x-1;
  document.getElementById('t').value=x;
  }
  else
  {
    document.getElementById('b2').disabled=true
  }
 
}

