import Navbar from './Navbardash';
import List_Math from './List_Math'
import Pagination from './Pagination'

import Footer from '../Home/Footer'

function Dashboard_Math() {
    return (
      <div>
        <Navbar />
        <List_Math />
        <Pagination/>
        
        <Footer/>
      </div>
    );
  }
  
  export default Dashboard_Math;