
// grab ul .nav-links
const nav = document.querySelector('.nav-links');
// grab burger spans
const burger = document.querySelector('.burger');
// grab links
const links = nav.querySelectorAll("a");

// Event Listner + If click on burger than function trigger toggle
burger.addEventListener('click', () => {
    //add toggle
    nav.classList.toggle("nav-open");
    // animate burger by taking toggle class from css
    burger.classList.toggle("toggle");
});


//grab links and for each link add EventListener

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle("nav-open");
        //change color
        burger.classList.toggle("toggle");

    });
});