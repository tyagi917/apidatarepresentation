function Detail(props){
	const {detail}=props
	console.log(props)
	return(
			
			<tr style={{textAlign:"center",color:"white",borderLeft:"20px"}}>
			<td>{detail.id}</td>
			<td>{detail.name}</td>
			<td>{detail.username}</td>
			<td>{detail.address.city}</td>
			<td>{detail.address.zipcode}</td>
			<td>{detail.company.name}</td>
			</tr>



			);
}
export default Detail