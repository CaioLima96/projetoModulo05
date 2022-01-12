
export default ({ img, title, children, inverted = false }) => {
    return <div style={inverted ? stylesInverted : styles}>
        <img style={{ borderRadius: 8 }} width={525} height={300} src={img} alt="eventos" />
        <div style={stylesText} id="texto">
            <h1>{title}</h1>
            <div style={dividerStyles}></div>
            <br />
            <p>{children}</p>
        </div>
    </div>
}


const styles = {
    marginBottom: "60px",
    display: "flex",
}

const stylesInverted = {
    display: "flex",
    marginBottom: "30px",
    flexDirection: "row-reverse"
}

const stylesText = {
    paddingTop: "24px",
    margin: 0,
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const dividerStyles = {
    width: "200px",
    backgroundColor: "darkgrey",
    height: "1px"
}