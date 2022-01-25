import React  from 'react'

import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from "react";
import Typography from '@material-ui/core/Typography'

import { selectCities } from "../../state/selectors";

import { getCityWeather } from "../../state/action";

const HistoryPage = () => {

    const reduxCities = useSelector(selectCities);
    const sessionCities = sessionStorage.WEATHER_APP_CITIES ? JSON.parse(sessionStorage.WEATHER_APP_CITIES) : []
    const localCities = localStorage.WEATHER_APP_CITIES ? JSON.parse(localStorage.WEATHER_APP_CITIES) : []

    const dispatch = useDispatch()
    const onClickCity = city => {
        dispatch(getCityWeather(city));
    }

    return(
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            City (Redux)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reduxCities.map((city,index)=>(
                        <TableRow key={index}>
                            <TableCell>
                                <Typography>
                                    <Link to="/" onClick={()=> onClickCity(city)}>
                                        {city}
                                    </Link>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <hr/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            City (Session)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sessionCities.map((city,index)=>(
                        <TableRow key={index}>
                            <TableCell>
                            <Typography>
                                    <Link to="/" onClick={()=> onClickCity(city)}>
                                        {city}
                                    </Link>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <hr/>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            City (Storage)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {localCities.map((city,index)=>(
                        <TableRow key={index}>
                            <TableCell>
                                <Typography>
                                    <Link to={`/search?city=${city}`}> 
                                        {city}
                                    </Link>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default HistoryPage