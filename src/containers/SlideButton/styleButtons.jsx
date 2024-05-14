import styled from "styled-components";

export const Buttons = styled.div`

    label {
        position: relative;
        display: inline-block;
        font-family: sans-serif;
        width: 16px;
        height: 16px;
        margin-right: 12px;
        border-radius: 15px;
        cursor: pointer;
        border: 2px solid #fff;
        padding: 8px;

        span {
            display: inline-block;
            transition: background-color .3s ease;
            width: 12px;
            height: 12px;
            border-radius: 8px;
            position: absolute;
            top: 2px;
            left: 2px;
        }
        .backFFF {
            background-color: #fff;
        }

        &:hover span {
            background-color: #fff;
        }
    }
`
