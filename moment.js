const pa = document.getElementById("pa")
const span = document.createElement("span")
span.innerHTML = " B "

pa.innerHTML = "A"
pa.appendChild(span)
pa.innerHTML += "C"
