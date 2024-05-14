import styled from "styled-components";

export const ImageSlide = styled.div`

    display: flex;
    overflow: hidden;
    margin-bottom: 18px;

    input {
        display: none;
    }

    .slide1:checked ~ .img {
        left: 0;
    }


    .slide2:checked ~ img {
        left: -100%;
    }

    .slide3:checked ~ img {
        left: -200%;
    }

    img {
        position: relative;
        left: 0;
        /* margin:0 110px; */
        transition: all 1s ease;
        transform: rotate(10deg);
        filter: drop-shadow(5px 4px 8px #000);

        animation: carrossel 3s ease-in-out;

        width: 100%;

    }
    img:nth-child(6) {
        transform: rotate(0) translateX(80px  );
        width: 400px;

    }
`