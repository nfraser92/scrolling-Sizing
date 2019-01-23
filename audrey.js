const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

// Adjust the width of audrey to be 1/3 the value of `window.scrollY`. No lower than 50px, though.
document.addEventListener("scroll", function (event) {  
    if (window.scrollY > 50) {
        let width = window.scrollY / 3
        audrey.style.width = `${width}`
        
    }

// Adjust the height of audrey to be 1/4 the value of `window.scrollY`. No lower than 100px, though.
    if (window.scrollY > 100) {
        let height = window.scrollY / 4
        audrey.style.height = `${height}`
    }
})

