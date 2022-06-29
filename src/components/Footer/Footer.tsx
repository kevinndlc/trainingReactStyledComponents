import React from 'react';
import styled from 'styled-components';

type Props = {};

function Footer({}: Props) {
  return <Wrapper className='p-20'>Copyright &copy; 2022 Cookchef Dyma, Inc.</Wrapper>;
}

const Wrapper = styled.footer`
  background-color: var(--gray-1);
  color: var(--white);
  text-align: center;
`;

export default Footer;
