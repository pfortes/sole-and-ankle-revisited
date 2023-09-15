import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, BRAKEPOINTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const Bread = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">
      Shoes
    </Breadcrumbs.Crumb>
  </Breadcrumbs>
)
const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <BreadMovil >
              <Bread />
            </BreadMovil>
            <Title>Running</Title>
          </div>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Bread />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  
`;
const BreadMovil = styled.div`
// background-color: #f00;
  display: none;
  align-self: flex-start;
  @media (max-width: ${BRAKEPOINTS.phone}) {
    display: block;
    margin-top: -30px;
  }
  @media (max-width: ${BRAKEPOINTS.tablet}) {
    display: block;
    margin-top: -30px;
    
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (max-width: ${BRAKEPOINTS.tablet}) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: ${BRAKEPOINTS.tablet}) {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
