import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Logo from '../assets/logo.svg';
import { Icon } from '@mui/material';


export default function SitemarkIcon() {
  return (
    <Icon style={{width:'5rem',height:"5rem"}}>
  <img  style={{ width:'5rem',height:"5rem"}} src={Logo}/>
</Icon>
  );
}
