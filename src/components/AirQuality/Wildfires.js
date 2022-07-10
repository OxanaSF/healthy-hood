import { Box, Flex, Skeleton } from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { defaultTheme } from '../Theme';

const center = { lat: 37.773972, lng: -122.431297 };

function Wildfires({ data }) {
  // console.log(data)
  console.log('result is: ', JSON.stringify(data, null, 10));

  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.REACT_APP_API_KEY,

  });

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box
        position="absolute"
        left={0}
        top={0}
        h="100%"
        w="100%"
        border="10px"
        rounded="10px"
        borderColor="gray.300"
      >
        
        <GoogleMap
          center={center}
          zoom={3}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
            styles: defaultTheme,
          }}
        >
          <Marker position={center}/>

          {data
            .filter((item) =>
              item.properties.categories[0].id.includes('wildfires')
            )
            .map((item) => (
              <Marker
                key={
                  item.geometry.coordinates[0] + item.geometry.coordinates[1]
                }
                position={{
                  lat: item.geometry.coordinates[1],
                  lng: item.geometry.coordinates[0],
                }}
              />
            ))}
        </GoogleMap>
        </Box>
    </Flex>
  );
}

export default Wildfires;
