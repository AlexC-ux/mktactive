import { FixedBgSection } from "@/components/FixedBgSection";
import { ColoredText } from "@/components/colored";
import { Box, Paper, Typography } from "@mui/material";
import { Montserrat } from "next/font/google"

const titleFont = Montserrat({  subsets: ["cyrillic"] })

export default function Home() {
  return (
    <>
      <FixedBgSection bgUrl="https://img.freepik.com/free-photo/back-view-of-crowd-of-fans-watching-live-performance-on-music-concert-at-night-copy-space_637285-544.jpg?w=2000">
        <Typography
          className={titleFont.className}
          color={"grey"}
          sx={{
            position: "absolute",
            top: "40%",
            fontSize: "10vw",
            width: "100%",
            textAlign: "center",
          }}
        >
          <ColoredText color="white">М</ColoredText>о<ColoredText color="blue">К</ColoredText>рый<ColoredText color="red">Т</ColoredText>анк
        </Typography>
      </FixedBgSection>
      <FixedBgSection bgUrl="https://ca-times.brightspotcdn.com/dims4/default/845afe6/2147483647/strip/true/crop/6720x3780+0+700/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F0b%2F86%2F29e75f7e449daba1c767ae7aa073%2Fphoto-2022-08-07-3-41-54-am.png">
        <>123</>
      </FixedBgSection>
    </>
  )
}
