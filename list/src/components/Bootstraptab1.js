import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

export class Bootstraptab1 extends React.Component {
  state = {
    persons: [],
    columns: [
              { 
                keyField: 'avatar', 
                dataField: 'avatar.name',  
                text: 'Avatar'  
              },  
              {  
                dataField: 'id',  
                text: 'ID',  
                sort:true  
              }, 
              {  
                dataField: 'firstName',  
                text: 'First Name',  
                sort: true,
                filter: textFilter() 
              },  
              {    
                dataField: 'lastName',  
                text: 'LastName',
                sort:true,
                filter: textFilter() 
              },  
              {  
                dataField: 'email',  
                text: 'Email',  
                sort:true  
              }, 
              {  
                keyField: 'company',
                dataField: 'company.name',  
                text: 'Company',  
                sort: true  
              },
              
              { 
                keyField: 'company',
                dataField:'company.department',  
                text: 'Department',  
                sort: true  
              },
              {  
                keyField: 'company',
                dataField: 'company.startDate',  
                text: 'Start Date',  
                sort: true
              }
              ]
  }
  componentDidMount() {
    axios.get(`http://apis.chromeye.com:9191/people`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
    
  }
  render() {
        const options = {
            page: 1,
            sizePerPageList: [
                {
                    text: '1', value: 1
                }, 
                {
                    text: '3', value: 3
                },
                {
                    text: '5', value: 5
                },
                {
                    text: 'All', value: this.state.persons.length
                }
            ],
            sizePerPage: 3,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',
            paginationPosition: 'top'  

        };
    return (
            <div className="container">
            <div  style={{ marginTop: 50 }}>
            <BootstrapTable
            striped
            hover
            keyField='id'
            data={ this.state.persons }
            columns={ this.state.columns }
            filter={ filterFactory() }
            pagination={ paginationFactory(options) }>
              </BootstrapTable>
            </div> 
            </div> 

            )  
    }

}
export default Bootstraptab1
