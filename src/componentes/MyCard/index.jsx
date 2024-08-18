import * as React from 'react';
import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import MyButtonMedio from '../MyButtonMedio';



export default function MyCard(props) {
    return (
        <>
            <Card sx={{ height: '200px', textAlign: 'start', }}>
                <CardContent>

                    <Typography sx={{ display: 'flex', color: '#339CFF', fontWeight: 'bold', gap: '8px' }}>
                        {props.icon}
                        {props.title}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#6B6E71', marginTop: '10px' }}>
                        {props.nome}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: '#6B6E71', marginTop: '2px' }}>
                        {props.data}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: '#6B6E71', marginTop: '2px' }}>
                        {props.uf}
                    </Typography>
                    <Typography sx={{ marginTop: '15px' }} >
                        {props.button}
                    </Typography>


                </CardContent>
            </Card>
        </>

    );
};