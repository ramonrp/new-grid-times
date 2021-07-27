import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LeftActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
        </LeftActionGroup>
        <Logo />
        <RightActionGroup>
              <InsideDiv>
                <Button>SUBSCRIBE</Button>
                <Anchor href="#">Already a subscriber?</Anchor>
              </InsideDiv>    
        </RightActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display:none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LeftActionGroup = styled.div`
  display:none;

  @media ${QUERIES.desktopAndUp} {
    flex:1;
    display:flex;
    gap:24px;
  }
  
`

const RightActionGroup = styled.div`
  display:none;

  @media ${QUERIES.desktopAndUp} {
    flex:1;
    display:flex;
    justify-content:flex-end;
  }
`

const InsideDiv = styled.div`
    
    display:flex;
    flex-direction:column;
    gap:8px;
    align-items: center;
`
const Anchor = styled.a`
  text-decoration:underline;
  font-style: italic;
  font-size:${14/16}rem;
  color: var(--grey-900);
  &:hover{
    text-decoration:none;
    transform: scale(1.05)
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 84px;
  }
  @media ${QUERIES.desktopAndUp} {
    justify-content:center;
    align-items:baseline;
    margin-top: 16px;
    margin-bottom: 86px;
  }
`;

export default Header;
