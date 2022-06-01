import React, { Fragment } from 'react';
import {AiOutlineCheck} from "react-icons/ai"
/* import { BiAddToQueue } from "react-icons/bi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { MdOutlineLibraryBooks } from "react-icons/md" */
import { connect } from 'react-redux';
import "../styles/table.scss";
import FormInformation from './formInformation';
class TableJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formdata : 0,
          checkShowForm : false,
          Head : []
        }
        this.handleOnclickOpen = this.handleOnclickOpen.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (event) =>{
      this.setState({...this.state,formdata : event})
      setTimeout(() => {
        const check = document.querySelectorAll("#form-container")
        if(check[1]){
          check[1].style.display = "block"
        }
        document.getElementById("form-container").style.display = "block "
      },250);
    }
    handleOnclickOpen = (name) => {
      const abc = document.getElementById("container-report-problem")
      abc.style.display = "block"
    }
    
    shouldComponentUpdate(nextProps){
      if(this.props !== nextProps){
        return true
      }
      return false
    }
    render() {
      var tbody
      if(this.props.typeTable === "todoList"){
        tbody = (
          <tbody>
          { this.props.addTableBody.map((item, index) => (
            <Fragment key={index}>
              <tr className='table-row'onDoubleClick={ () => this.handleClick(index)}
                key={index}>
                  <td>{index + 1}</td>
                  <td>{item.NameServices}</td>
                  <td>{item.Status === "0" ? "Chưa hoàn thành" : "Hoàn Thành"}</td>
                  <td>{item.DayStart}</td>
                  <td>{item.TimeStart}</td>
                  <td><AiOutlineCheck onClick={ () => this.handleClick(index)}   className='icon-accept' /></td>
                  {/* <td>{item.AddressCustomer}</td>
                  <td>{item.PhoneCustomer}</td> */}
                </tr>
            </Fragment>
          ))}
        </tbody>
        )
      }
      if(this.props.typeTable === "history"){
        tbody = (
          <tbody>
          { this.props.addTableBody.map((item, index) => (
            <Fragment key={index}>
              <tr className='table-row'onDoubleClick={ () => this.handleClick(index)}
                key={index}>
                  <td>{index +1}</td>
                  <td>{item.NameServices}</td>
                  <td>{item.Status === "0" ? "Chưa hoàn thành" : "Hoàn Thành"}</td>
                  <td>{item.DayStart}</td>
                  <td>{item.TimeStart}</td>
                  <td>{item.DayEnd}</td>
                  <td><AiOutlineCheck onClick={ () => this.handleClick(index)}   className='icon-accept' /></td>
                  {/* <td>{item.AddressCustomer}</td>
                  <td>{item.PhoneCustomer}</td> */}
                </tr>
            </Fragment>
          ))}
        </tbody>
        )
      }
      if(this.props.typeTable === "requirementcustomer"){
        tbody = 
          <tbody>
          { this.props.addTableBody.map((item, index) => (
            <Fragment key={index}>
              <tr className='table-row' onDoubleClick={ () => this.handleClick(index)}
                key={index}>
                  <td style={{textAlign: "left"}} id='abcxyzz'>{item.NameServices}</td>
                  <td style={{textAlign: "left"}} id='abcxyzz'>{item.DayStart}</td>
                  <td id='abcxyzz'>{item.TimeStart}</td>
                  <td id='abcxyzz'>{item.NameCustomer}</td>
                  <td id='abcxyzz'>{item.AddressCustomer}</td>
                  <td><AiOutlineCheck onClick={ () => this.handleClick(index)}   className='icon-accept' /></td>
                </tr>
            </Fragment>
          ))}
        </tbody>
      }
      
     /*  if(this.state.checkShowForm){
        showForm =
         <FormInformation 
          title = { this.props.addTableHead }
          content = { this.props.addTableBody[this.state.formdata] }
          typeForm = { this.props.typeTable }
         />
      } */
        return (
           /*  <>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className='table-header'>
                  <TableRow>
                    {this.props.addTableHead.map( (row) => {
                       return (
                        <TableCell align='left' key={row}>{row}</TableCell>
                       )
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  { this.props.addTableBody.map((row, index) => (
                    <TableRow className='table-row'
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      { row.map( (rows, index) => (  <TableCell align='left' key={index}>{rows}</TableCell> )) }
                      { /*this.state.length_head === this.state.length_body ? null :<TableCell align='center'><AiOutlineCheck className='icon-accept' /> </TableCell>*/
                     /* this.props.addTableHead.filter( item => item ==="Nhận việc" ).length > 0 ? 
                      <TableCell align='left'> <AiOutlineCheck  className='icon-accept' /> </TableCell> :
                      <TableCell align='left'>
                         { this.props.addTableHead.filter( item => item === "Ngày kết thúc" ).length > 0 ?
                             <MdOutlineLibraryBooks className="icon-see" /> :
                             <>
                              <BiAddToQueue  className='icon-add' onClick={ () => this.handleOnclickOpen("container-report-problem")} />
                              <RiDeleteBin5Line className='icon-delete'/> 
                              <AiOutlineEdit className='icon-edit'/> 
                             </>
                         }
                      </TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </> */
      <>
         <table className='table table-striped' id="myTable">
           <thead>
             <tr>
             {this.props.addTableHead.map( (row,index) => {
                return (
                 <th key={index}>{row}</th>
                )
              })}
             </tr>
           </thead>
              {tbody}
         </table>
         <FormInformation 
          title = { this.props.addTableHead }
          content = { this.props.addTableBody[this.state.formdata] }
          typeForm = { this.props.typeTable }
         />
      </>
          )
    }
}

const mapStateToProps = (state) =>{
  return{
    requirementCustomer : state
  }
}
export default connect(mapStateToProps)(TableJob)