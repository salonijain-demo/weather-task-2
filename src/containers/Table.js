import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './table.css';


class Tables extends Component{
  render(){
      return(
        <div>
        <h1><b>{this.props.city}</b></h1>
        <TableContainer >
          <Table>
            <TableHead>
                <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Weather</TableCell>
            <TableCell align="right">Minimum Temperature</TableCell>
            <TableCell align="right">Maximum Temperature</TableCell>
            <TableCell align="right">Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.weather.map((row) => (
            <TableRow >
              <TableCell align="right">{row.applicable_date}</TableCell>
              <TableCell align="right">{row.weather_state_name}<img className='img' src={process.env.PUBLIC_URL + `/images/${row.weather_state_abbr}.svg`}></img></TableCell>
              <TableCell align="right">{row.min_temp.toFixed(2)}</TableCell>
              <TableCell align="right">{row.max_temp.toFixed(2)}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
  }
}
export default Tables