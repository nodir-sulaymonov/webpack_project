import * as $ from 'jquery'

function createAnalytcs(): object {
    let counter = 0
    let destroyed: boolean = false
    const listener = () => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            destroyed = true
        },
        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytcs()
