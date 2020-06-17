let start // set on the first step to the timestamp provided
const el1 = document.getElementById('count1') // get the element
const el2 = document.getElementById('count2') // get the element
const el3 = document.getElementById('count3') // get the element
const final1 = parseInt(el1.textContent, 10) // parse out the final number
const final2 = parseInt(el2.textContent, 10) // parse out the final number
const final3 = parseInt(el3.textContent, 10) // parse out the final number
const duration = 4000 // duration in ms
const step = ts => {
    if (!start) {
        start = ts
    }
    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration

    el1.textContent = @ Math.floor(progress * final1) // set the text
    el2.textContent = Math.floor(progress * final2) // set the text
    el3.textContent = Math.floor(progress * final3) // set the text
    if (progress < 1) {
        // if we're not 100% complete, request another animation frame
        requestAnimationFrame(step)
    }
}

// start the animation
requestAnimationFrame(step)

