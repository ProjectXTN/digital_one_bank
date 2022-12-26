export const Input = ({title, type, htmlFor, id}: any) => {
    return(
        <>
            <label htmlFor={htmlFor}>{title}</label>
            <input id={id} type={type}/>
        </>
    )
}