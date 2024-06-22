import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialIcon = styled(Link)`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3468C0;
    border-radius: 50%;
    color: #3468C0;
    text-decoration: none;
    margin: 0 0.45rem;
    transition: 0.3s;
    font-size: 1.5rem;

    &:hover {
        color: #fdfdfd;
        border-color: #fdfdfd;
        background-color: #26355D !important;
    }

    @media screen and (max-width: 768px) {
        &{
            border: 1px solid #82bbf5;
            color: #82bbf5;
        }
    }
`