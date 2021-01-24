import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar from '../NavBar/NavBar'
import Swal from "sweetalert2";


function Admin() {

    useEffect(() => getFeedback(), [])

    // Creates a variable that starts as an empty array to be used by the getFeedback
    const [tableData, setTableData] = useState([]);

    const getFeedback = () => {
        console.log('Getting feedback');

        // GETs the data from the database to populate the table.
        axios.get('/feedback').then((response) => {
            console.log(response.data);
            // Sets the variable for the table data
            setTableData(response.data);
        })
    } // END getFeedback

    // handles the click on the delete button using sweet alert 2
    const deleteButton = (feedbackToDelete) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            // checks if the yes or no button was deleted
          }).then((result) => {
            if (result.isConfirmed) {
                // if yes is clicked, it sends the info over to handleDelete and runs the function.
                handleDelete(feedbackToDelete)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    // function is ran if the yes on the sweet alert is clicked. 
    const handleDelete = (feedbackToDelete) => {
        console.log('Deleting feedback', feedbackToDelete);
        let id = feedbackToDelete.id
        console.log(id);

        // delete request to remove the feedback from the database based on the id of the feedback.
        axios.delete(`/feedback/${id}`).then((response) => {
            console.log(response);
            getFeedback();
        }).catch((err) => {
            console.log(err);
        });


    }




    return (
        <>
            <NavBar />

            {/* table to display the info from the server. */}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling </TableCell>
                            <TableCell align="center">Comprehension</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Maps through the info from the server and displays if on the DOM. */}
                        {tableData.map((feedback) => (
                            <TableRow key={feedback.id}>
                                <TableCell align="center">{feedback.feeling}</TableCell>
                                <TableCell align="center">{feedback.understanding}</TableCell>
                                <TableCell align="center">{feedback.support}</TableCell>
                                <TableCell align="center">{feedback.comments}</TableCell>
                                <TableCell align="right"><button className="deleteBtn" onClick={() => deleteButton(feedback)}>Delete</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Admin;