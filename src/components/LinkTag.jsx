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
                color: 'grey.700',
                fontSize: 12
            }}
            variant="button"
        >
            {children}
        </Link>
    );
}
 
export default LinkTag;