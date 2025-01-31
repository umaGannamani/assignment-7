import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-heigth: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const TrendingvideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`
export const TrendingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
export const TredingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
