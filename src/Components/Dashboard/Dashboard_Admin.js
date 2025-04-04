import Navbar from './Navbardash';
import List_Admin from './List_Admin'
import Pagination from './Pagination'

import Footer from '../Home/Footer'

function Dashboard_Admin() {
    return (
      <div>
        <Navbar />
        <List_Admin />
        <Pagination/>
        
        <Footer/>
      </div>
    );
  }
  
  export default Dashboard_Admin;