import makeStyles from "@mui/styles/makeStyles"


const useStyle = makeStyles(theme=> ({
    root: {
        width: '100%',
        height: '100vh',
        background: '#232323'
    }
}))

const ViewPolygon = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>

        </div>
    )
}

export default ViewPolygon