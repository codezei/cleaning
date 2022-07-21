export default ()=> {
    let parent = document.querySelector(".contacts__right")
    let frame = document.createElement("iframe")
    frame.setAttribute("src", "https://www.google.com/maps/d/u/0/embed?mid=1K1-Ng_AzxC6SD8lJuJxZL__T9gvKXyc&ehbc=2E312F")
    frame.classList.add("contacts__map")
    parent.append(frame)
}