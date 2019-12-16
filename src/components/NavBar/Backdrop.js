import React from 'react'
import styled from 'styled-components'

const backDrop = props => (

    <BackDrop className="backdrop" onClick={props.click}></BackDrop>
)

export default backDrop;

const BackDrop = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 100;
    background: rgba (0, 0, 0, 0.3);
    z-index: 100;

`