import { FunctionComponent, MouseEvent, SVGProps, useEffect, useRef } from "react";
import { fill, findElement, move, text, Movement } from 'utils/svg'
import { scaleValue } from "utils/conversions";

interface MovementProps {
    position: number
    movementLength: number
    direction: 'Horizontal' | 'Vertical'
    idTree: any
}
interface TextProps {
    value: number,
    suffix: string,
    decimalPlaces: number,
    nonDecimalPlaces: number,
    scale: number
    idTree: any
}
interface ColorProps {
    value: number,
    colors: string[]
    idTree: any
}
interface SvgProps {
    Svg: FunctionComponent<SVGProps<SVGSVGElement>>
    movements: MovementProps[],
    texts: TextProps[],
    colors: ColorProps[],
    onClick?: (e: MouseEvent<SVGSVGElement>) => void
}
function Svg({ colors, movements, texts, Svg, onClick }: SvgProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        colors.forEach(color => {
            if (svgRef.current) {
                const fillPart = findElement(svgRef.current, color.idTree);

                if (fillPart) {
                    fill(fillPart, color.colors[color.value]);
                }
            }
        })
        movements.forEach(movement => {
            const x: Movement | undefined = movement.direction === 'Horizontal' ? { length: movement.movementLength, position: movement.position } : undefined;
            const y: Movement | undefined = movement.direction === 'Vertical' ? { length: movement.movementLength, position: movement.position } : undefined;
            if (svgRef.current) {
                const movementPart = findElement(svgRef.current, movement.idTree);
                if (movementPart)
                    move(movementPart, { x, y })
            }
        })
        texts.forEach(value => {
            if (svgRef.current) {
                const textPart = findElement(svgRef.current, value.idTree);
                const numberValue = scaleValue(value.value, value.scale);
                const zerosNeeded = value.nonDecimalPlaces - Math.floor(numberValue).toString().length
                const textValue = `${numberValue.toFixed(value.decimalPlaces)} ${value.suffix}`;
                const textWithPad = textValue.padStart(textValue.length + zerosNeeded, '0')
                if (textPart)
                    text(textPart, zerosNeeded >= 0 ? textWithPad : ''.padStart(4, '#'));
            }
        })
    })

    return <Svg onClick={onClick} style={{ width: '100%', height: '100%' }} ref={svgRef} />
}

export default Svg;