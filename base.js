const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let state = initalState()

const step = (t1) => {
    debugger
    return (t2) => {
        if (t2 - t1 > 100) {
            state = next(state)
            draw()
            window.requestAnimationFrame(step(t2))
        } else {
            window.requestAnimationFrame(step(t1))
        }
    }
}

window.requestAnimationFrame(step(0))
