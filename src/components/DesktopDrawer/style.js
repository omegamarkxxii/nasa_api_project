const style = {
    root: {
        display: 'flex'
    },
    drawer: {
        zIndex: 1000,
        backgroundColor: 'white',
        width: {
            xs: 100,
            sm: 100,
            md: 300,
            lg: 350,
            xl: 350
        },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width:  {
                xs: 100,
                sm: 100,
                md: 300,
                lg: 350,
                xl: 350
            },
            boxSizing: 'border-box',
        },
    },
    capBox: {
        flexGrow: 1
    },
    capText: {
        mt: 10,
        color: "grey.800",
        fontSize: 12,
        textAlign: 'center'
    },
    capPaper: {
        m: 2, 
        p: 1
    },
    capSpan: {
        color: "blue", 
        fontWeight: 'bold'
    },
    imgBox: {
        flexGrow: 1, 
        bgcolor: 'background.default', 
        p: 0.5,
    }
}

export default style;