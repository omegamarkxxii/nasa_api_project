const style = {
    base: {
        position: 'fixed',
        top: '0',
        left: '0',
        bgcolor: 'grey.900',
        opacity: 1,
        p: 0,
        zIndex: 1200,
        overflowY: 'hidden' 
    },
    clsBtn: {
        color: '#fff', 
        position: 'absolute', 
        top: 20, 
        left: 20
    },
    box: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
        height: '90%',
        objectFit: 'contain'
    }
}

export default style;