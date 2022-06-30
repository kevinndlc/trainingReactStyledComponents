import React, { useState } from 'react';
import { Heart } from 'react-feather';
import styled from 'styled-components';

type RecipeProps = {
  title: string;
  image: string;
};

function Recipe({ title, image }: RecipeProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Wrapper onClick={() => setIsLiked(!isLiked)}>
      <Image src={image} alt="" />
      <Title>{title}</Title>
      <HeartIcon fill={ isLiked ? 'red' : 'transparent' } />
    </Wrapper>
  );
}

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`;

const Title = styled.h2`
  font-size: 2rem;
  position: absolute;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  text-align: center;
  width: 80%;
`;

const HeartIcon = styled(Heart)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const Wrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: background-color 500ms;
  cursor: pointer;

  &:hover {
    background-color: transparent;

    ${Title} {
      color: var(--primary);
    }
  }
`;

export default Recipe;
