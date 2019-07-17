const images = document.querySelectorAll('img');
images.forEach(function (img) {
    img.addEventListener('click', function(){
        this.classList.toggle('active');
    })
})
