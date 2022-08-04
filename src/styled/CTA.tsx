import styled from 'styled-components';

const CTAComponent = styled.a`
    padding: 11.5px 24px;
    width: 100%;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    transition: all .2s ease 0s;
    vertical-align: middle;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;

    background: #6421ff;

    &:hover {
        filter: brightness(1.2);
    }

    &:active {
        opacity: .7;
        transform: scale(.97);
        transition: 0s;
    }

    @media only screen and (min-width: 769px) {
        padding: 20.5px 33px;
    }
`;

export default CTAComponent;