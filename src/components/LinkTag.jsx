import { Link } from '@mui/material';

const LinkTag = ({componentType, path, children}) => {
    return ( 
        <Link
            underline="hover"
            component={componentType}
            to={path}
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'grey.800',
                fontSize: {
                    xs: 11,
                    sm: 11,
                    md: 12,
                    lg: 13,
                    xl: 13
                } 
            }}
            variant="button"
        >
            {children}
        </Link>
    );
}
 
export default LinkTag;