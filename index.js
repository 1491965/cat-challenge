const $imageBig = document.querySelector('.principal-image-box')
const $cat1 = document.querySelector('.cat-1')
const $cat2 = document.querySelector('.cat-2')
const $cat3 = document.querySelector('.cat-3')



function handleShow1() {
$imageBig.innerHTML = '<img src="images/cat-1.jpeg"></img>'

}
function handleShow2() {
$imageBig.innerHTML = '<img src="images/cat-2.jpeg"></img>'

}
function handleShow3() {
$imageBig.innerHTML = '<img src="images/cat-3.jpeg"></img>'

}

$cat1.addEventListener('click', handleShow1)
$cat2.addEventListener('click', handleShow2)
$cat3.addEventListener('click', handleShow3)

