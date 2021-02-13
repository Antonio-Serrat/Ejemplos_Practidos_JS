//Mostramos por consola en el navegador 
console.log('Bienvenidos al webinar de JS')
//Podemos escribir junto al index con js!
document.querySelector('h1').innerHTML += '<i style= "color:blue;"> Como estan!</i'
//TAmbien es posible cambiar el color con js!
document.querySelector('p').style.color = 'red'
// Creamos una lista con js y la mostramos.
let ul = document.createElement('ul')
for(var i=0; i<5; i++){
    ul.innerHTML += `<li>Item ${i+1}</i>`
}
document.body.appendChild(ul)

//Mostramos la lista en la consola del navegador
let items = document.querySelectorAll('li')
console.log(items)

//Coloreamos la lista dependiendo si es par o impar mediante el metodo for
for(var i=0; i<items.length; i++){
    items[i].style.color = i%2? 'orange':'green'
    items[i].style.backgroundColor = i%2? '#555':'#333'

}