import { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import './index.css'
import MyButton from "../../componentes/MyButton";

import MyButtonIcon from "../../componentes/ButtonSmall";
import MyButtonMedio from "../../componentes/MyButtonMedio";
import MyCard from "../../componentes/MyCard";
import MyTab from "../../componentes/MyTab";
import FilterListIcon from '@mui/icons-material/FilterList';


function Home() {

    return (
        <>
            <div>
                <MyCard nome={'Emerson Thiago silva sousa'} data={'31/08/2002'} uf={'Teresina - PI'} button={<MyButtonMedio backgroundcolor={'#0B3B60'} text={'Ver Mais'} colortext={'white'} />} />
                <hr />
                <MyCard icon={<PersonIcon />} title={'Informações Pessoais'} nome={'Agataha pandora madeira '} data={'15/09/2008'} uf={'teresina - PI'} button={<MyButtonMedio backgroundcolor={'#0B3B60'} text={'Ver Mais'} colortext={'white'} />} />
                <MyTab />
            </div>
        </>
    )
}

export default Home