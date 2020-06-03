function match(selct, elem) {
    if (!elem || !selct) {
        return false
    }
    let elements = [elem]
    let curNode = elem
    while (curNode.parentNode) {
        elements.push(curNode.parentNode)
        curNode = curNode.parentNode
    }

    const selectorParts = selct.split(' ').reverse()

    if (!matchC(selectorParts[0], elem)) {
        return false
    }

    let matched = false
    let j = 1

    for (let i = 0, len = elements.length; i < len; i++) {
        if (matchC(selectorParts[j], elements[i])) {
            j++
        }
    }

    return matched = j >= selectorParts.length

}
function matchC(selct, elem) {
    if (!selct || !elem) return false
    const regPattern = /(#[a-zA-Z]+[_a-zA-Z0-9-]*?)|(\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|([a-z]+)/g
    const matched = selct.match(regPattern)
    let matchTime = 0

    for (const p of matched) {
        if (p.charAt(0) === '#') {
            const attr = Array.from(elem.attributes).filter(attr => attr.name === 'id')[0]
            if (attr && attr.value === p.replace('#', '')) {
                matchTime++
            }
        } else if (p.charAt(0) === '.') {
            const attr = Array.from(elem.attributes).filter(attr => attr.name === 'class')[0]

            if (attr) {
                const classes = attr.value.split(' ')

                for (let className of classes) {
                    if (className === p.replace(".", '')) {
                        matchTime++
                    }
                }
            }
        } else {
            console.dir(elem)
            if (elem.tagName.toLowerCase() === p) {
                matchTime++
            }
        }
    }

    return matchTime === matched.length
}
