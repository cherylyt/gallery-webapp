import * as React from 'react';
import { Container, createTheme, ThemeProvider } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import hill from './Photos/DSC08252.JPG'
import sunshine from './Photos/DSC08293.JPG'
import back from './Photos/DSC08378.JPG'
import ship from './Photos/DSC08514.JPG'
import grass from './Photos/1625-14.JPEG'
import kite from './Photos/1625-17.JPEG'
import sunrise from './Photos/IMG_5637.JPG'
import silhouette from './Photos/IMG_5649.JPG'
import plane from './Photos/IMG_5656.JPG'
import cars from './Photos/DSC09150.JPG'
import kyoto from './Photos/DSC09548.JPG'
import rose from './Photos/DSC09714.JPG'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const digitalPhotoListHK = [
    {
        img: sunshine,
        title: "sunshine"
    },
    {
        img: hill,
        title: "hill"
    },
    {
        img: back,
        title: "back"
    },
    {
        img: ship,
        title: "ship"
    }

]

const digitalPhotoListOsaka = [
    {
        img: cars,
        title: "cars"
    },
    {
        img: rose,
        title: "rose"
    },
    {
        img: kyoto,
        title: "kyoto"
    }
]

const filmPhotoList = [
    {
        img: grass,
        title: "grass"
    },
    {
        img: kite,
        title: "kite"
    },
    {
        img: sunrise,
        title: "sunrise"
    },
    {
        img: silhouette,
        title: "silhouette"
    },
    {
        img: plane,
        title: "plane"
    }
]

function DisplayImageList({ photoList }) {
    return (
        <Box >
            <ImageList variant="masonry" cols={3} gap={8}>
                {photoList.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}


function Gallery() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Lora',
                'serif'
            ].join(','),
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" >
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#D97D54"
                                }
                            }}
                            textColor="inherit"
                        >
                            <Tab label="Digital" {...a11yProps(0)} />
                            <Tab label="Film" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Photos by Sony &alpha; NEX-5N
                        <div><LocationOnIcon sx={{ fontSize: 14, color: "#D97D54" }} /> Hong Kong</div>
                        <DisplayImageList photoList={digitalPhotoListHK} />
                        <div
                            style={{
                                background: '#BDBDBD',
                                height: '0.3px',
                            }}
                        />
                        <br />
                        <div> <LocationOnIcon sx={{ fontSize: 14, color: "#D97D54" }} /> Osaka, Japan</div>
                        <DisplayImageList photoList={digitalPhotoListOsaka} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Photos by Minolta X-370
                        <DisplayImageList photoList={filmPhotoList} />
                    </TabPanel>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Gallery;