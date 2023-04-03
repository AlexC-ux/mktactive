import { createRef, useEffect } from "react"
import style from "./parallax.module.scss";

const paralaxSesitivity = 200;

export interface IParallaxCardProps {
    imgUri: string
}

export function ParallaxCard(props: IParallaxCardProps) {

    const cardRef = createRef<HTMLDivElement>();
    const imageRef = createRef<HTMLImageElement>();

    useEffect(() => {
        const offsetX = cardRef.current!.getBoundingClientRect().left - cardRef.current!.parentElement!.getBoundingClientRect().left;
        const offsetY = cardRef.current!.getBoundingClientRect().top - cardRef.current!.parentElement!.getBoundingClientRect().top;


        cardRef.current!.parentElement!.addEventListener('mousemove', (ev: MouseEvent) => {
            const deltaX = offsetX + (((ev.clientX) - (document.documentElement.offsetWidth / 2)) / paralaxSesitivity);
            const deltaY = offsetY + (((ev.clientY) - (document.documentElement.offsetHeight / 2)) / paralaxSesitivity);


            cardRef.current!.style.transform = `perspective(800px) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
            imageRef.current!.style.transform = `perspective(0px) translateX(${deltaX}px) translateY(${deltaY}px)`;

            //cardRef.current!.style.transform = `rotate(${(((ev.clientX) - (document.documentElement.offsetWidth / 2)) / paralaxSesitivity / 2)}deg)`    BUG!
        })
    })

    return <div
        className={style.cardWrapper}
        ref={cardRef}>
        <img
            className={style.cardImage}
            ref={imageRef}
            src={props.imgUri} />
    </div>
}