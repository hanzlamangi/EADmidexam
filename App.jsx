import React, { Component } from 'react';  
import ReactTable from "react-table";  
import "react-table/react-table.css";  
class App extends Component {  
  render() {  
    const data = [

      { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
    
      { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
    
      { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },
    
      { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },
    
      { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },
    
      { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },
    
      { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },
    
      { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },
    
      { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },
    
      { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },
    
    ];
    
    
const columns = [{  
Header: 'id',  
       accessor: 'id'  
      },{  
      Header: 'name',  
      accessor: 'name'  
      },{  
        Header: 'age',  
        accessor: 'age'  
        }
        ,{  
          Header: 'city',  
          accessor: 'city'  
          },{  
            Header: 'occupation',  
            accessor: 'occupation'  
            }] 

           return (  
          <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              />  
          </div>        
    )  
  }  
}  
export default App;