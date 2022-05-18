import React, { Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlineCheck,AiOutlineEdit } from "react-icons/ai"
import { BiAddToQueue } from "react-icons/bi"
import { RiDeleteBin5Line } from "react-icons/ri"
import { MdOutlineLibraryBooks } from "react-icons/md"
import "../styles/table.scss";
class TableJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.handleOnclickOpen = this.handleOnclickOpen.bind(this)
        this.handleOnclickClose = this.handleOnclickClose.bind(this)
        this.handleClickClick = this.handleClickClick
    }

    handleOnclickOpen = (name) => {
      const abc = document.getElementById("container-report-problem")
      abc.style.display = "block"
    };
    handleOnclickClose = (name) => {
      document.getElementById(name).style.display = "none"
    }
    render() {
      var tbody
      if(this.props.typeTable === "todoList"){
        tbody = (
          <tbody>
          { this.props.addTableBody.map((item, index) => (
            <Fragment key={index}>
              <tr className='table-row'
                key={index}>
                  <td>{item.Id}</td>
                  <td>{item.NameServices}</td>
                  <td>{item.Status}</td>
                  <td>{item.DayStart}</td>
                  <td>{item.TimeStart}</td>
                  {/* <td>{item.NameCustomer}</td>
                  <td>{item.AddressCustomer}</td>
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
              <tr className='table-row'
                key={index}>
                  <td id='abcxyzz'>{item.NameServices}</td>
                  <td id='abcxyzz'>{item.DayStart}</td>
                  <td id='abcxyzz'>{item.TimeStart}</td>
                  <td id='abcxyzz'>{item.NameCustomer}</td>
                  <td id='abcxyzz'>{item.AddressCustomer}</td>
                  <td><AiOutlineCheck  className='icon-accept' /></td>
                </tr>
            </Fragment>
          ))}
        </tbody>
        
      }
      console.log(this.props.typeTable)
      console.log(this.props)
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
         <table className='table table-striped'>
           <thead>
             <tr>
             {this.props.addTableHead.map( (row) => {
                return (
                 <th key={row}>{row}</th>
                )
              })}
             </tr>
           </thead>
              {tbody}
         </table>
            
          )
    }
}
export default TableJob