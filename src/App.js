import "./App.css";
import { useTranslation, Trans } from 'react-i18next';
import { BsFacebook } from "react-icons/bs";
import Image from "../src/google.png";
import Image2 from "../src/apple.png";
import {AiOutlineSearch} from "react-icons/ai"
import {GiThrowingBall} from "react-icons/gi"
import {GiReceiveMoney} from "react-icons/gi"
import {GiSellCard} from "react-icons/gi"
import {FaHandshake} from "react-icons/fa"
import {FaQuestion} from "react-icons/fa"
import {FaPeopleArrows} from "react-icons/fa"
import {GoAlert} from "react-icons/go"

import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  StylesProvider,
  Typography,
} from "@material-ui/core";
import { BsInstagram } from "react-icons/bs";
import { height } from "@mui/system";
import { useEffect } from "react";
const newDate = new Date().getFullYear();
const email = "customer.service@quaesta.org";
const styles = {
  title: {
    fontWeight: "bold",
    fontSize: "220%",
    textAlign: "center",
  },
  text: { fontSize: "140%", fontWeight: "bold", zIndex: 999, lineHeight: 2 },

  bttn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "black",
  },
  footer: {
   margin:15,
    fontSize: "110%",
  },
  icon:{marginTop:20}
};

function App() {
  const { t, i18n } = useTranslation();
  useEffect(()=> {
    const lang = navigator.language;
    i18n.changeLanguage(lang)
    window.scrollTo({
top:0,
behavior:"smooth"
    });
  },[])
  const lang = navigator.language
  return (
    <Box className="App">
      <Box
        className="div"
        style={{
          //backgroundImage: `url(${Image})`,
          //aspectRatio: 22 / 9,
          height: "100vh",
          width: "100%",
          opacity: 0.7,

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          
        }}
      >
        <Box sx={{display:"flex", marginLeft:30, flexDirection:"row", justifyContent:"space-between"}}>
        <Typography
          style={{ fontSize: "200%", fontWeight: "bold", marginLeft: 20 }}
        >
          {t("quaesta")}
        </Typography>
        
</Box>
<Box sx={{display:"flex", flexDirection:"column",height:"100vh",
 justifyContent:"center",
}}>
        <Typography style={{ fontSize: "160%", fontWeight: "bold" }}>
         {t("title")}
        </Typography>
        <Box
          sx={{
            height: 200,
            display: "flex",

            width: "100vw",
          }}
        >
          <Grid
            container
            spacing={2}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item>
              <Box
                sx={{
                  backgroundColor: "black",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  width: 230,
                }}
              >
                <Button style={styles.bttn}>{t("download")}</Button>
                <img src={Image} alt="logo" width={40} height={40} />
              </Box>
            </Grid>
            <Grid item>
              {" "}
              <Box
                sx={{
                  backgroundColor: "black",
                  borderRadius: 3,
                  display: "flex",

                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  width: 230,
                }}
              >
                <Button style={styles.bttn}>{t("download")}</Button>
                <img src={Image2} alt="logo" width={40} height={40} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Box>
      <Box
        sx={{
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 30,
        }}
      >
        
        <Typography style={styles.title} variant="h3">
        {t("about")}
        </Typography>
      </Box>
      <Box sx={{ display:"flex", margin:10 }}>
      <Grid
            container
            spacing={2}
           
          >
            <Grid item xs={12} sm={6}>
      <Box sx={{}}>
          <AiOutlineSearch size={60} style={styles.icon} />
        <Typography style={styles.text}>
         {t("lost")}
        </Typography>
        <GiThrowingBall size={60}  style={styles.icon}/>
        <Typography style={styles.text}>
          
       {t("hobby")}
        </Typography>
        <GiReceiveMoney size={60}  style={styles.icon}/>
        <Typography style={styles.text}>
         {t("sideJob")}
        </Typography>
        <GiSellCard size={60}  style={styles.icon}/>
        <Typography style={styles.text}>{t("rent")}</Typography>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box>
          <FaHandshake size={60} style={styles.icon} />
        <Typography style={styles.text}>
          {t("barter")}
        </Typography>
        <FaQuestion size={60} style={styles.icon} />
        <Typography style={styles.text}>
          {t("advices")}
        </Typography>
        <FaPeopleArrows size={60} style={styles.icon} />
        <Typography style={styles.text}>
          {t("whoFor")}
        </Typography>
        <GoAlert size={60} style={styles.icon} />
        <Typography style={styles.text}>
        {t("alert")}
        </Typography> 
         
        </Box>
        </Grid>
      </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#e6eaf0",
          height: 300,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          lineHeight:4
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          }}
        >
          <Link
            href="https://web.facebook.com/profile.php?id=100090010941138"
            style={{ marginRight: 20 }}
          >
            {" "}
            <BsFacebook size={45} color="blue" />{" "}
          </Link>
          <Link href="https://www.instagram.com/?next=%2F">
            <BsInstagram size={45} className="insta" />
          </Link>
        </Box>
        <Link
          color="danger"
          underline="hover"
          variant="null"
          className="footer"
          href={`mailto:${email}`}
        >
          <Typography style={styles.footer}>{email}</Typography>
        </Link>

        <Typography style={styles.footer}>{t("copyright")} {newDate}</Typography>
      </Box>
    </Box>
  );
}

export default App;
