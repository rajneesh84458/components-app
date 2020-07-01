import React, { useState } from 'react'
import { View, Text ,TouchableOpacity,Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';

  
const PhotoSelector = () => {

const [avatarSource,setAvatarSource] =useState(null)
  const options ={
    title :"select photo" ,
   takePhotoButtonTitle :"choose from Camera",
   chooseFromLibraryButtonTitle : "choose from Library"

}
  
const CameraPicker = () => {
  // let options = {
  //   storageOptions: {
  //     skipBackup: true,
  //     path: 'images',
  //   },
  // };
  ImagePicker.launchCamera(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }  else {
      const source = { uri: response.uri };
      console.log('response', JSON.stringify(response));
      // this.setState({
      //   filePath: response,
      //   fileData: response.data,
      //   fileUri: response.uri
      // });
      setAvatarSource(source)
    }
  });
}
 
  const Gallerytaken = () => {
   // alert("clicked")
   ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }  else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      setAvatarSource(source)
    }
  });
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

       <Image source ={avatarSource} 
              style={{width:200,height:200,borderRadius:100}}
       />
     <TouchableOpacity onPress ={()=>Gallerytaken()}
     style ={{
                 alignItems:'center',justifyContent:'center',backgroundColor:'red',height:50,width:100
     }}>
       <Text style={{color:'white'}}>Gallery</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress ={()=>CameraPicker()}
       style={{marginTop:30,}}>
       <Image source ={require('../../assets/shutter.png')}
             />
     </TouchableOpacity>
    </View>
  )
}

export default PhotoSelector
