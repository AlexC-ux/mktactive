import { HTMLAttributes, createRef, useEffect } from "react"

const paralaxSesitivity = 200;

export function ParalaxPhotoCard(props: HTMLAttributes<HTMLDivElement>) {

    const cardRef = createRef<HTMLDivElement>();

    useEffect(() => {
        const offsetX = cardRef.current!.getBoundingClientRect().left - cardRef.current!.parentElement!.getBoundingClientRect().left;
        const offsetY = cardRef.current!.getBoundingClientRect().top - cardRef.current!.parentElement!.getBoundingClientRect().top;
        document.body.addEventListener('mousemove', (ev: MouseEvent) => {
            console.log({ cursorY: ev.clientY, cursorX: ev.clientX, val: (((ev.clientX) - (document.documentElement.offsetWidth / 2)) / paralaxSesitivity), offsetLeft: cardRef.current!.offsetLeft })
            cardRef.current!.style.left = `${offsetX + (((ev.clientX) - (document.documentElement.offsetWidth / 2)) / paralaxSesitivity)}px`;
            cardRef.current!.style.top = `${offsetY + (((ev.clientY) - (document.documentElement.offsetHeight / 2)) / paralaxSesitivity)}px`;
            //cardRef.current!.style.transform = `rotate(${(((ev.clientX) - (document.documentElement.offsetWidth / 2)) / paralaxSesitivity / 2)}deg)`    BUG!
        })
    })

    return <div
        ref={cardRef}
        style={{
            ...props.style,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            margin: "30px",
            position: "absolute",
        }}>
    </div>
}