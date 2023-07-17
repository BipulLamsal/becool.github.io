const blob = document.querySelector('.box');
const element = document.querySelector('.fancy');


const fancyWord = 'Tech-Enthusiast';  
document.addEventListener('mousemove', (event) => {
  
  blob.animate(
    {left : `${event.clientX }px`,
    top : `${event.clientY }px`},  
    {
        duration: 2000,
        easing: 'ease-out',
        fill: 'forwards',
    
      }

  )
});


element.addEventListener('mouseenter', function(){
  const children = element.children;
  for (let i =0; i<children.length; i++)
  {
    children[i].animate({
      transform: `translate(0%, ${parseInt(Math.random() * (50) -25)}%) rotate(${parseInt(Math.random() * (16) -8)}deg)`,
      
    },{
      duration: 2000,
      easing: 'ease-out',
      fill: 'forwards',

    })

  }
})

element.addEventListener('mouseleave',function(){
  const children = element.children;
  for (let i =0; i<children.length; i++)
  {
    children[i].animate({
      transform: `translate(0%, 0%) rotate(0deg)`,
    },{
      duration: 2000,
      easing: 'ease-out',
      fill: 'forwards',

    })

  }

})


const spanner = (text) =>
{
element.innerHTML = "";
const letters = text.split("")
letters.map(item => {
const span = document.createElement("span");
span.innerText = item;
span.className = 'letter';
element.appendChild(span);
})
}

spanner(fancyWord);
