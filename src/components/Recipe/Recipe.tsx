import React from 'react'
import styled from 'styled-components'
import recipe from '../../assets/images/recipe.webp'

function Recipe() {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={recipe} alt="" />
      </ImageContainer>
      <Title>Recipe Title</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 500px;
  position: relative;
`

const ImageContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
`

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`

const Title = styled.h2`
  font-size: 2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -200%);
`

export default Recipe