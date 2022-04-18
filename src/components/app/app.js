import {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';





class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      data: [
        {name: 'Emil', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Maks', salary: 900, increase: true, rise: false, id: 2},
        {name: 'Dima', salary: 10000, increase: false, rise: false, id: 3}
      ], 
      term: '',
      filter: ''
    }
  }
    deleteItem = (id) => {
      this.setState(({data}) => {
        
        return {
          data: data.filter(item=> item.id !== id)
        }
      })
    }  

    addItem = (name, salary) => {
      const newItem = {
        name: name,
        salary: +salary,
        increase: false,
        rise: false,
        id: uuidv4()
      }
      this.setState(({data}) => {
        return {
          data: [...data, newItem]
        }
      })
    }


    onToggleProp = (id, prop) =>{
      
      this.setState(({data})=> ({
        data: data.map(item => {
          if(item.id === id){
            return {...item, [prop]: !item[prop]}
          }

          return item;
        })
      }))
    }

    onToggleRise = (id) =>{
      this.setState(({data})=> ({
        data: data.map(item => {
          if(item.id === id){
            return {...item, rise: !item.rise}
          }

          return item;
        })
      }))
    }

    searchEmp = (items, term) => {
      if(term.length === 0){
        return items;
      }

      return items.filter(item =>{
        return item.name.indexOf(term) > -1

      })
    }

    onUpdateSearch = (term) =>{
      this.setState({term});
    }

    filterPost = (items, filter) => {
      switch (filter) {
          case 'rise':
              return items.filter(item => item.rise);
          case 'moreThen1000':
              return items.filter(item => item.salary > 1000);
          case 'lessThen900':
              return items.filter(item => item.salary < 900)
          default:
              return items
      }
  }

  onFilterSelect = (filter) => {
      this.setState({filter});
  }

  render() {
      const {data, term, filter} = this.state;
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      const visibleData = this.filterPost(this.searchEmp(data, term), filter);

      return (
          <div className="app">
              <AppInfo employees={employees} increased={increased}/>
  
              <div className="search-panel">
                  <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                  <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
              </div>
              
              <EmployeesList 
                  data={visibleData}
                  onDelete={this.deleteItem}
                  onToggleProp={this.onToggleProp}/>
              <EmployeesAddForm onAdd={this.addItem}/>
          </div>
      );
  }
}


let date = new Date(2021, 1,9);
let month = date.getMonth();



switch ( month) {
    case (1 || 11 || 0):
        console.log('winter');
        break
    case (10 || 9 || 8):
        console.log('fall');
        break
    case(7 || 6 || 5):
        console.log('summer');
        break
    case(4 || 3 || 2):
        console.log('spring');
        break

}

let age = 22;
age = 23;
age = 24;

console.log(age);

export default App;