const style = {
    root: {
        display: 'flex',
        bgcolor: 'grey.50'
    },
    drawer: {
        zIndex: 1000,
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
        bgcolor: 'grey.50', 
        p: 0.5,
    }
}

export default style;