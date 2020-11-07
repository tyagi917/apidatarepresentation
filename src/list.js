import React,{Component} from 'react'
import axios from "axios";
import Detail from './detail.js'
import './App.css';
//import  ChartsPage from './piechart.js' 
class List extends Component
{
	state={
		data:[]
	}
	async componentDidMount()
	{
		const res=await axios.get("https://jsonplaceholder.typicode.com/users");
		console.log(res);
		this.setState({data:res.data});
		console.log(this.state.data);

	}

	render(){
		return(
			<div >
			
			<table  className="table" style={{ margin:"0 auto",background:"gray"
		}}>
		<thead>
		<tr style={{padding:"0px" ,color:"blue",margin:"0 auto"}}>
		<th>Sno</th>
		<th>Name</th>
		<th>UserName</th>
		<th>City</th>
		<th>PinCode</th>
		<th>CompanyName</th>
		</tr>
		</thead>
		
		<tbody>
		{
			this.state.data.map(data=>{

			return <Detail detail={data}/>
			

	})
		}
		</tbody>
		</table>
			</div>
			);
	}
}
export default List;