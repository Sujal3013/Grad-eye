function randomGradient(){
    r1=Math.floor(Math.random() * 256);
    g1=Math.floor(Math.random() * 256);
    b1=Math.floor(Math.random() * 256);
    r2=Math.floor(Math.random() * 256);
    g2=Math.floor(Math.random() * 256);
    b2=Math.floor(Math.random() * 256);
    r3=Math.floor(Math.random() * 256);
    g3=Math.floor(Math.random() * 256);
    b3=Math.floor(Math.random() * 256);
    return `linear-gradient(${0.25}turn,rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}),rgb(${r3},${g3},${b3}))`;
}

var btnhandle=document.querySelector('#clickme');

btnhandle.addEventListener('click',function(){
    document.body.style.background=randomGradient();
    var colors=document.createElement('h2');
    colors.innerText='Gradient generated';
    document.body.appendChild(colors);
    colors.classList.add('result');
    colors.style.color=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    setTimeout(() => {
        document.body.removeChild(colors);
    }, 150);
})