import Link from 'next/link';
import styled from 'styled-components';

const Header = ({children}) => {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Link passHref href={'/'}><Logo>
          <LogoPre>SEO</LogoPre>
          TOOLKIT
        </Logo></Link>
      </HeaderWrapper>
      {children}
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 15px;
    font-family: 'Roboto';
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
`
const LogoPre = styled.span`
    color: red;
`

export default Header;