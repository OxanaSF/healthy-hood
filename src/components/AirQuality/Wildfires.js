
import styled from "styled-components"
import  Map  from "../Map/Map"
import { useJsApiLoader } from "@react-google-maps/api";


const API_KEY_GOOGLE_MAP = process.env.REACT_APP_API_KEY_GOOGLE_MAPS

const defaultCenter = {
  lat: 37.773972,
  lng: -122.431297
};

const Wildfires = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY_GOOGLE_MAP
  })

  return (
    <WildfiresStyled>
      {isLoaded ?  <Map center={defaultCenter}/> : <h2>Loading...</h2>}
    
    
    </WildfiresStyled>
  )
}


const WildfiresStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default Wildfires