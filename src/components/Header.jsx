import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import authService from "../auth/authService"
const settings = ["Dashboard",'Profile', 'Reservations', 'Logout'];

function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const { pathname } = useLocation(); 
    const [showAvatar, setShowAvatar] = React.useState(true);

    React.useEffect(() => {
        if (pathname === '/' || pathname === '/signup') {
            setShowAvatar(false);
        } else {
            setShowAvatar(true);
        }
    }, [pathname]);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuItemClick = (setting) => {
        handleCloseUserMenu();
        if (setting === 'Logout') {
            authService.removeToken();
            navigate('/');
        } else if (setting === "Reservations") {
            navigate("/manager");
        } else if (setting === "Profile") {
            navigate("/profile");
        } else if (setting === "Dashboard"){
            navigate("/main")
        }
    };

    return (
        <AppBar position="static" sx={{ background: '#003747' }}>
            <Toolbar disableGutters>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/main"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BMT HOTEL
                    </Typography>
                </Box>

                {showAvatar && (
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenUserMenu}
                            color="inherit"
                        >
                            <Avatar alt="Avatar" />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
