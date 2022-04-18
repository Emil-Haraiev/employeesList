import {Component} from 'react'

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    OnValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
        
    }
   
    render(){
        const {onAdd} = this.props;
        const onSubmit = (e) => {
            e.preventDefault()
            if(this.state.name.length < 3 || !this.state.salary) return;
            onAdd(name,salary)
        }
        const{ name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.OnValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.OnValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"   
                            onClick={
                               onSubmit
                            }>Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;