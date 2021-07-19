window.onload = function (){
    var imgs = document.querySelectorAll(".img")
    var dots = document.querySelector(".dots").getElementsByTagName("span")
    //遍历banner图片，设置图片索引
    for(var i = 0;i < imgs.length;i++){
        imgs[i].setAttribute("data-index", i)
        dots[i].setAttribute("data-index", i)
    }
    var current = document.querySelector(".current").getAttribute("data-index");
    // 遍历圆点，绑定事件
    for(var k = 0;k<dots.length;k++){
        dots[k].addEventListener("click", function (){
            var index = this.getAttribute("data-index");
            if(current != index){
                imgs[current].classList.remove("current")
                dots[current].classList.remove("square")
                imgs[index].classList.add("current")
                dots[index].classList.add("square")
                current = index
            }
        })
    }

    var timer = setInterval(changeimg, 3000)

    function changeimg() {
        imgs[current].classList.remove("current")
        dots[current].classList.remove("square")
        if(current == imgs.length-1){
            current = 0
        }else {
            current++
        }
        imgs[current].classList.add("current")
        dots[current].classList.add("square")
    }
}