import Navbar from './Navbardash';
import List_Jd from './List_Jd';
import Pagination from './Pagination'

import Footer from '../Home/Footer'

function Dashboard_Jd() {
    return (
      <div>
        <Navbar />
        <List_Jd />
        <Pagination/>
        <Footer/>
      </div>
    );
  }
  
  export default Dashboard_Jd;