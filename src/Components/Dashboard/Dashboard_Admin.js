import Navbar from './Navbardash';
import ListAdmin from './List_Admin';
import Pagination from './Pagination';
import Footer from '../Home/Footer'

function Dashboard_Admin() {
    return (
      <div>
        <Navbar />
        <ListAdmin />
        <Pagination/>
        
        <Footer/>
      </div>
    );
  }
  
  export default Dashboard_Admin;