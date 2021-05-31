import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import useStyles from './components/Styles'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Employees from './pages/Employees/Employees';
const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#333996',
      light:'#3c44b126'
    },
    secondary:{
      main:'#f83245',
      light:'#f8324526'
    },
    background:{
      default:'#f4f5fd'
    }
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <SideMenu />
    <div className={classes.appMain}>
      <Header />
      <Employees />
    </div>
    <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
}

export default App;
