import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { duration, keyframes, styled } from '@mui/material/styles';
import { useSpring,animated } from '@react-spring/web';
import './style.css'
import { Bounce, toast, ToastContainer } from 'react-toastify';

const rotateBackground = keyframes`
  0% { transform: scale(100%); }
  50% { transform: scale(200%); }
  75%{ transform: scale(110%); }
    90%{ transform: scale(90%); }
  100% { transform: scale(100%); }


`;

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage:`url(https://cdn.dribbble.com/userupload/17567388/file/original-0eabd53fc9456d16eb43a842f4af08d0.png?resize=1504x1129&vertical=center)`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(https://cdn.dribbble.com/userupload/17567388/file/original-0eabd53fc9456d16eb43a842f4af08d0.png?resize=1504x1129&vertical=center)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));
const AnimatedGradientBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '99vw',
  minHeight: '60vh',
  overflow: 'hidden',
  backgroundColor: 'white', // base
}));
const GradientLayer = styled('div')({
  position: 'absolute',
  width:'70%',
  height:'30%',
  
  top: '0',
  left: '20%',
  backgroundImage: 'radial-gradient(ellipse at 30% 40%, rgba(50,205,50,0.3), rgba(0,100,0,0.9))',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '200% 200%',
  animation: `${rotateBackground} 20s linear infinite`,
  filter: 'blur(100px)',
  borderRadius: '35% 65% 70% 30% / 30% 40% 60% 70%', // Uneven blob shape
  zIndex: 0,
  pointerEvents: 'none',
});




export default function Hero() {
    const notify = () => toast.warn('Under Developement!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      

  let [isFinish,setFinish]=React.useState(false)
React.useEffect(()=>{
  setTimeout(()=>{
    setFinish(true)
  },200)
},[])


  return (


    <AnimatedGradientBox
      id="hero"
      className='.mode-light'

    >
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
       
       <GradientLayer/>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              color:'black',
              zIndex:1
            }}
          >
            Our&nbsp;latest&nbsp;Farming&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                zIndex:10,

                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              services
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              zIndex:10,

              width: { sm: '100%', md: '80%' },
            }}
          >
            Explore our cutting-edge farming management tools , delivering high tech recording and quality checkups tailored to your needs.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
              onClick={notify}
            >
              Start now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </AnimatedGradientBox>
  
  );
}
