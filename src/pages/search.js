import { BaseNavBar, DesktopDrawer } from "../components";

const Search = ({dispatch}) => {

  return ( 
      <>
          <BaseNavBar />
          <DesktopDrawer dispatch={dispatch} />
      </>
  );
}
 
export default Search;