export function ColoredText(props:{color:string, children:JSX.Element|string}){
    return <span style={{color:props.color}}>{props.children}</span>
}