import React from "react";
import {useState, useEffect } from 'react';
import AppBar from "../components/AppBar";
import {Container, Button} from "@mui/material"
import { DataGrid } from "@mui/x-data-grid";
import { useHistory } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Admin = () => {
    const [ rows, setRows ] = useState([]); //set rows to empty array
    const apiUrl = 'http://localhost:3001/listings';
    const history = useHistory();

    useEffect( () => {
        // Go get data
        // fetch data 
        getApiData();

    }, []);

    const getApiData = () => {
        fetch(apiUrl, {method: "GET"})
            .then(response => response.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setRows(data);
    };

    const getId = (params) => {
        return `${params.id}`;
    }

    const handleClick = () => {
        history.push("/listing/create");
    }

    const handleEdit = (e) => {
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('edit item:' + itemId);
        history.push("/listing/edit/" + itemId);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('delete item:' + itemId);
        fetch(apiUrl + '/' + itemId, {method: "DELETE"})
            .then(response => response.json())
            .then(res => { //reloads data after deleting
                getApiData();
            });
    };

const columns = [
    {field: "id", headerName: "ID", width: 70},
    {field: "title", headerName: "Title", width: 200},
    {field: "author", headerName: "Author", width: 200},
    {field: "publishDate", headerName: "Date", width: 100},
    {field: "mainImage", headerName: "Image", width: 150},
    {field: "shortDescription", headerName: "Short Description", width: 300},
    {field: "longDescription", headerName: "Long Description", width: 150},
    { field: 'Edit', headerName: 'Edit', width: 200, valueGetter: getId, renderCell: (params) => (
        <>
            <Button variant="contained" color="primary" size="small" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={handleDelete}>Delete</Button>
        </>
    )}
];

    return (
        <>
        <ThemeProvider theme={darkTheme}>
            <AppBar title="Admin"/>
            {/*<Container sx={{ height: 600, width: "100%", pt: 8}}>*/}
            </ThemeProvider>
            <div style={{backgroundColor: 'gray', height: 600, width: "70%", margin: "auto", paddingTop: 8}}>
                <Button variant="contained" sx={{ mb: 1}} onClick={handleClick}>Create listing</Button>
                <DataGrid rows={rows} columns={columns} pagesize={5} checkboxSelection/>
            </div>
            {/*</Container>*/}
            
        </>
    )
}

export default Admin;