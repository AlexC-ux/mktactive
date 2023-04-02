import { Header } from "@/components/Header";
import { ColoredText } from "@/components/colored";
import { ParalaxPhotoCard } from "@/components/paralaxPhotoCard";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <Header />
      <section
        style={{
          backgroundAttachment: "",
          background: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0,0.6)), url('https://img.freepik.com/free-photo/back-view-of-crowd-of-fans-watching-live-performance-on-music-concert-at-night-copy-space_637285-544.jpg?w=2000')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh"
        }}>
        <Typography
          color={"grey"}
          sx={{
            position: "absolute",
            top: "40%",
            fontSize: "10vw",
            width: "100%",
            textAlign: "center",
            fontWeight: 900,
          }}
        >
          <ColoredText color="white">М</ColoredText>о<ColoredText color="blue">К</ColoredText>рый<ColoredText color="red">Т</ColoredText>анк
        </Typography>
      </section>
      <section
        style={{
          background: "#151723",
          height: "100vh",
          position: "relative",
        }}>
        <ParalaxPhotoCard
          style={{
            background: "url('https://miro.medium.com/v2/resize:fit:876/1*pfjI6ZAQvK1SxowAZK-GOg.png')",
            width: "250px",
            height: "400px",
            backgroundPositionX: "950px",
            backgroundPositionY: "-250px",
          }} />

        <ParalaxPhotoCard
          style={{
            background: "url('https://miro.medium.com/v2/resize:fit:876/1*pfjI6ZAQvK1SxowAZK-GOg.png')",
            width: "250px",
            height: "400px",
            backgroundPositionX: "1350px",
            backgroundPositionY: "-250px",
            left:"300px"
          }} />

        <ParalaxPhotoCard
          style={{
            background: "url('https://miro.medium.com/v2/resize:fit:876/1*pfjI6ZAQvK1SxowAZK-GOg.png')",
            width: "250px",
            height: "400px",
            backgroundPositionX: "950px",
            backgroundPositionY: "-250px",
            left:"600px"
          }} />

      </section>
    </>
  )
}
