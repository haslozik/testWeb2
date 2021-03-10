/*var show = document.getElementById("mMenu");
        function showMenu() {
            show.style.right = '0';
        }

        function closeMenu() {
            show.style.right = '-100%';
        }
*/

var sliderConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 3
}

new Glide('.glide', sliderConfig).mount();