/*Login/ Logout Button*/
function logInOut(element){
    if (element.innerText=='Login'){
        element.innerText='Logout'
    }
    else{
        element.innerText='Login'
    }
}
/*Add Definition disapears*/
function hide(element){
    element.remove();
}
/*Like buttons alert*/
function newLike(element){
    alert('ninja was like!')
}

const box1 = document.getElementById('ad1');

// 👇️ Change text color on mouseover
box1.addEventListener('mouseover', function handleMouseOver() {
  box1.style.color = 'blue';
});

// 👇️ Change text color back on mouseout
box1.addEventListener('mouseout', function handleMouseOut() {
  box1.style.color = 'black';
});

const box2 = document.getElementById('ad2');

// 👇️ Change text color on mouseover
box2.addEventListener('mouseover', function handleMouseOver() {
  box2.style.color = 'blue';
});

// 👇️ Change text color back on mouseout
box2.addEventListener('mouseout', function handleMouseOut() {
  box2.style.color = 'black';
});

const box3 = document.getElementById('ad3');

// 👇️ Change text color on mouseover
box3.addEventListener('mouseover', function handleMouseOver() {
  box3.style.color = 'blue';
});

// 👇️ Change text color back on mouseout
box3.addEventListener('mouseout', function handleMouseOut() {
  box3.style.color = 'black';
});
