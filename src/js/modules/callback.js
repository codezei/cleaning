export default ()=>{
    let target = document.querySelector(".callback")
    let form = document.querySelector(".callback-form")
    let formWrap = document.querySelector(".callback__form")
    let answer = document.querySelector(".callback__answer")
    function toggleCallback () {
        
        let btn = document.querySelector(".js-open-callback")
        btn.addEventListener("click", function () {
            target.classList.toggle("callback--open")
            answer.classList.remove("callback__answer--open")
            formWrap.style.display = ""
        })
    }

    toggleCallback ()

    target.addEventListener("click", function (e) {
        console.log(e.target)
        if (e.currentTarget === e.target) {
            e.currentTarget.classList.toggle("callback--open")
        } else if (e.target.classList.contains("callback__close")) {
            e.currentTarget.classList.toggle("callback--open")
        }
    })


    function submitRequest () {

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            formWrap.style.display = "none"
            answer.classList.add("callback__answer--open")
            form.reset()
        })
    }

    submitRequest()
}