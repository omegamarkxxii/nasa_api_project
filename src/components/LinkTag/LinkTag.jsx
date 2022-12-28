import { Link } from '@mui/material';
import style from './style';

const LinkTag = ({componentType, path, children}) => {
    return ( 
        <Link
            underline="hover"
            component={componentType}
            to={path}
            sx={style.link}
            variant="button"
        >
            {children}
        </Link>
    );
}
 
export default LinkTag;