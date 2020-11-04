import React, { useState, useEffect, useRef } from 'react';
import {
      FaDollarSign,
      FaUsers,
      FaIcons,
      FaSignOutAlt,
      FaWrench,
      FaArchive,
      FaBars,
      FaObjectGroup,
      FaCalendar
} from 'react-icons/fa'
import s from '@emotion/styled'

const mockedData = [
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
      {
            name: '[carmit@bextra.io]',
            email: 'carmit@bextra.io',
            enterpriseName: 'mockedname',
            estimatedBudget: 1000,
            contractDate: '2020-11-04'
      },
]

const buttons = [
      {
            name: 'Teamwork',
            icon: <FaUsers color='#fff'/>
      },
      {
            name: 'Documents',
            icon: <FaArchive color='#fff'/>
      },
      {
            name: 'Message',
            icon: <FaBars color='#fff'/>
      },
      {
            name: 'Administration',
            icon: <FaWrench color='#fff'/>
      },
      {
            name: 'Accounts',
            icon: <FaUsers color='#fff'/>
      },
      {
            name: 'Sales',
            icon: <FaDollarSign color='#fff'/>
      },
      {
            name: 'Marketing',
            icon: <FaIcons color='#fff'/>
      },
      {
            name: 'Calendar',
            icon: <FaCalendar color='#fff'/>
      },
      {
            name: 'My Desk',
            icon: <FaObjectGroup color='#fff'/>
      }
]


const Table = ({data}) => (
      <TableContent>
            <thead>
                  <tr>
                        <TableRowHeader>Name</TableRowHeader>
                        <TableRowHeader>Email</TableRowHeader>
                        <TableRowHeader>Enterprise Name</TableRowHeader>
                        <TableRowHeader>Estimated Budget</TableRowHeader>
                        <TableRowHeader>Contact Date</TableRowHeader>
                  </tr>
            </thead>
            <tbody>
                  {data.map((r,i) => (
                        <tr key={i}>

                              <TableRowData key={r.name}>{r.name}</TableRowData>
                              <TableRowData key={r.email}>{r.email}</TableRowData>
                              <TableRowData key={r.enterpriseName}>{r.enterpriseName}</TableRowData>
                              <TableRowData key={r.estimatedBudget}>{r.estimatedBudget}</TableRowData>
                              <TableRowData key={r.contractDate}>{r.contractDate}</TableRowData>
                        </tr>
                  ))}
            </tbody>
      </TableContent>
)

const MenuButtons = ({btns, setIsMenu, btnRef, handleGetOffset}) => (
      <>
            {btns.map((b,i) => {
                  return (
                              <div
                                    ref={btnRef.current[i]}
                                    onMouseEnter={() => handleGetOffset(i)}
                                    onMouseLeave={() => setIsMenu(false)}

                              >
                                    {b.icon}
                                    <span>
                                          {b.name}
                                    </span>
                              </div>
                  )})}
      </>
)


const LeftBarComp = ({setIsMenu, btnRef, btns, handleGetOffset}) => (
      <LeftBar>
            <LeftBarTop>
                  <div>
                        <img src='https://bextra.io/wp-content/uploads/2020/07/favicon.png' />
                  </div>
                  <MenuButtons handleGetOffset={handleGetOffset} btnRef={btnRef} btns={btns} setIsMenu={setIsMenu}/>
            </LeftBarTop>
            <LeftBarBottom>
                  <CircleWrapper>
                        <Circle>
                              <div>
                                    A
                              </div>
                        </Circle>
                  </CircleWrapper>
                  <div>
                        <FaSignOutAlt color='#fff'/>
                  </div>
            </LeftBarBottom>
      </LeftBar>

)

const ContentComp = () => (
      <Content>
            <Header>
                  <BreadCrumb>
                        Marketing > Lead List
                  </BreadCrumb>
                  <Title>
                        Leads List
                  </Title>
            </Header>
            <MainContainer>
                  <TableContainer>
                        <Table data={mockedData} />
                  </TableContainer>
            </MainContainer>
      </Content>
)

export default function App() {
      const [isMenu, setIsMenu] = useState(false)
      const [isOffset, setOffset] = useState(0)
      const size = useWindowSize()
      const btnRef = useRef([])
      const elH = 400;
      btnRef.current = buttons.map((ref, i) => btnRef.current[i] = React.createRef())
      const handleGetOffset = (i) => {
            setIsMenu(true)
            console.log('e index', btnRef.current[i].current)
            console.log('e index', i)
            const curOffset = btnRef.current[i].current.offsetTop

            setOffset(curOffset)
      }
      return (
            <Container heightSize={size.height}>
                  <LeftBarComp handleGetOffset={handleGetOffset} btnRef={btnRef} btns={buttons} setIsMenu={setIsMenu}/>
                  <ContentComp />
                  {isMenu && (
                        <Menu offset={isOffset} elementHeight={elH} windowHeight={size.height}>

                              window: {size.height}
                              <div> ---- </div>
                              offset: {isOffset}
                              <div> ---- </div>
                              withElement: {isOffset + 400}
                        </Menu>
                  )}
            </Container>
      );
}

//hooks
function useWindowSize() {
      const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
      });
      useEffect(() => {
            function handleResize() {
                  setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                  });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowSize;
}

// this will prevent element to go under the window border
const Menu = s.div(props => ({
      color: 'white',
      width: '200px',
      height: '400px',
      left: '78px',
      top: props.offset + props.elementHeight > props.windowHeight
                             ? props.windowHeight - props.elementHeight + 'px'
                             : props.offset + 'px',
      position: 'fixed',
      background: '#2a2f4d'
}))

const Container = s.div(props => ({
      background: '#2a2f4d',
      maxHeight: props.heightSize  + 'px',
      minHeight: props.heightSize  + 'px',
      display: 'flex'
}))

const LeftBar = s.nav`
background: #2a2f4d;
display: flex;
flex-direction: column;
width: 72px;
> div {
flex: 1;
 > div {
  min-height: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  &:nth-of-type(1) {
   padding: 20px 0;
  }
  > span {
   font-size: 10px;
   color: white;
   margin-top: 4px;
  }
}
}
`
const LeftBarTop = s.div`
display: flex;
flex-direction: column;
> div {
&:hover {
transition: background .33s;
background: #383F6F;
cursor: pointer;
svg {
transition: color .33s;
color: #FA9028 !important;
}
}
}
`
const LeftBarBottom = s.div`
display: flex;
flex-direction: column;
`
const CircleWrapper = s.div`
margin: 0!important;
padding: 0 !important;
flex-direction: row !important;
`
const Circle = s.div`
align-self: flex-end;
background: #FAB300;
height: 50px;
width: 50px;
border-radius: 50%;
justify-content: center;
align-items: center;
display: flex;
color: white;
> div {
justify-content: center;
align-items: center;
display: flex;
background: #F78F2D;
height: 44px;
width: 44px;
border-radius: 50%;
}
`

const Content = s.div`
border-top-left-radius: 20px;
background: #fff;
flex: 1;
width: 100%;
`
const Header = s.header`
border-top-left-radius: inherit;
background: white;
padding: 16px 0 8px 20px;
`
const BreadCrumb = s.div`
font-size: 14px;
`
const Title = s.h4`
`
const MainContainer = s.div`
background: #fff;
height: calc(100% - 108px);
display: flex;
`
const TableContainer = s.div`
background: #f7f7f8;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
margin-left: 12px;
margin-bottom: 12px;
flex: 1;
`
const TableContent = s.table`
width: 100%;
border-spacing: 0;
padding-left: 12px;
> tr:nth-child(n+2) {
background: #fff;
}
`
const TableRowHeader = s.td`
font-family: serif;
font-weight: 600;
font-size: 17px;
padding: 24px;
`
const TableRowData = s.td`
font-family: sans;
color: #555;
font-size: 14px;
&:first-of-type {
border-left: 10px solid orange;
border-top-left-radius: 4px;
border-top-right-radius: 3px 10px;
border-bottom-right-radius: 3px 10px;
border-bottom-left-radius: 4px;
padding: 8px;
}
`
