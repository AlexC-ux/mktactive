export function FixedBgSection(props: { bgUrl: string, children: JSX.Element, bgAlfa?:number }) {
    return <section
        style={{
            backgroundAttachment: "fixed!important",
            background: `linear-gradient(rgba(0,0,0,${props.bgAlfa||0.6}), rgba(0,0,0,${props.bgAlfa||0.6})), url('${props.bgUrl}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh"
        }}>
        {props.children}
    </section>
}