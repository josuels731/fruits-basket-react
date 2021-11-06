
function findElement(current: Element, idTree: any): Element | undefined {
    const type = typeof idTree;

    if (type === 'string') {
        const newCurrent = current.children.namedItem(idTree);
        if (newCurrent === null)
            throw new Error('Id not Found in svg');
        else
            return newCurrent;
    } else if (type === 'object') {
        const key = Object.keys(idTree);

        const newCurrent = current.children.namedItem(key[0]);
        if (newCurrent === null)
            throw new Error('Id not Found in svg');
        else
            return findElement(newCurrent, idTree[key[0]])
    }
}

interface Movement {
    length: number,
    position: number
}
interface MoveOpts {
    x?: Movement,
    y?: Movement
}
function move(current: Element, opts: MoveOpts) {
    const translateX = opts.x ? (opts.x.position * opts.x.length) : 0;
    const translateY = opts.y ? (opts.y.position * opts.y.length) : 0;

    current.setAttribute('transform', `translate(${translateX}, ${translateY})`);
}

function fill(current: Element, color: string) {
    current.setAttribute('fill', color);
}

function text(current: Element, text: string) {
    current.childNodes[0].textContent = text;

}

export { findElement, move, fill, text }
export type { Movement, MoveOpts }