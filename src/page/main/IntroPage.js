import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
height: 240%;
width:633px;
margin:0px 0px 0px 0px;
padding: 0px;
opacity: 0.9;

/* position: absolute; */
&:hover{
  /* box-shadow: 10px 9px 10px 9px rgba(0,0,0,0.2); */
  transform: scale(1.1);
    /* margin-left:280px ; */
    transition: 1.1s;
    /* margin-top: 100px ; */
    opacity: 1;
}
`
const ImgBox = styled.div`
position: relative;
display: flex;

`

const Title = styled.p`
font-size: 100px;
display: flex;
justify-content: start;
width:80%;
position:absolute;
`

const IntroPage = () =>{

    return(
        <ImgBox>

             <ImgBox>
               <Link Link to="/main">
                <Image src={require(`../../../public/image/city4.png`).default}  />
               </Link>
             </ImgBox>


             <ImgBox>
               <Link Link to="/main">
                <Image src={require(`../../../public/image/city.png`).default}  />
               </Link>
             </ImgBox>

             <ImgBox>
               <Link Link to="/main">
                <Image src={require(`../../../public/image/city2.png`).default}  />
               </Link>
             </ImgBox>

        
        </ImgBox>

      )
}

export default IntroPage