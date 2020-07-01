import React,{useState} from 'react'
import { View, Text , Image,ScrollView,Dimensions,StyleSheet} from 'react-native'
import Home from '../screens/Home';

const {width} = Dimensions.get("window")
const height = width * 0.6  // 60%
const images = [
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575260526066-cac1342382ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575329741318-cda48cb4c842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
]
const Carousel = () => {
    const [active,setActive] = useState(0)

    const change = ({nativeEvent}) => {
        const slide= Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);

        if(slide !== active){
            setActive(slide)
        }
    } 
    return (
        <View style={styles.container}>

            <ScrollView 
                    onScroll ={change}
                    horizontal 
                    pagingEnabled
                    showsHorizontalScrollIndicator ={false}
                    style={styles.scroll}>
               {images.map((image,index)=>(
                
                    <Image 
                    source ={{uri:image}}
                    key={index}
                    style={styles.imageStyle}
                    />
               ))}
            </ScrollView>
            <View style ={styles.pagination}>
            {
                images.map((i,k)=>(
                    <Text key={k} style={ k == active ? styles.paginationActiveText :  styles.paginationtext}>⬤</Text>
                ))
            }
                
            </View>
            {/* <Home/> */}
        </View>
    )
}

export default Carousel


const styles =StyleSheet.create({
    container:{width,height},
    scroll:{width,height},
    imageStyle:{width,height,resizeMode:'cover'},
    pagination:{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'},
    paginationtext:{fontSize:20,color:'#888',margin:5},
    paginationActiveText:{fontSize:20,color:'#fff',margin:5}

})