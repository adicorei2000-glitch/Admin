import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';


import Sidebar from "./assets/components/Sidebar";

import Header from "./assets/components/Header";

import RouterComp from './router';

export default function JoyOrderDashboardTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
               <>
        <Sidebar />
  
       
           <RouterComp />

       
        </>
        
     
      </Box>
    </CssVarsProvider>
  );
}