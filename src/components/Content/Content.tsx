import styled from 'styled-components';
import Recipe from '../Recipe';
import { data } from '../../data/recipes'

type Props = {};

function Content({}: Props) {
  const recipes = data;

  return (
    <Wrapper className="container mb-20">
      <h2 className="my-20">Découvrez nos nouvelles recettes</h2>
      <Grid>
        {recipes.map((r) => {
          return <Recipe title={r.title} image={r.image} />;
        })}
      </Grid>
    </Wrapper>
  );
}

function colorElements() {
  let output = '';

  for (let i = 1; i < 10; i++) {
    const randomHue = Math.floor(Math.random() * 360);

    output += `> div:nth-child(${i}) {
      background-color: hsl(${randomHue}, 50%, 50%);
      color: hsl(${Math.abs(randomHue - 180)}, 50%, 50%);
      font-weight: 700;
    }`;
  }

  return output;
}

const Wrapper = styled.main`
  flex: 1 1 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 1rem;
  
  > div {
    height: 500px;
  }
`;

export default Content;
