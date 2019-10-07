
import React from 'react';
import {TouchableOpacity,Image,Text} from 'react-native'
import _ from 'lodash';
import styles from '../../pages/mainPoke/styles';



export default class PokeCell extends React.Component {

    static defaultProps = {
        item : {},
        onPress: () => {}
    }

    render () {
        const {item} = this.props
        const imageUri = { uri: item.url.name }

        console.log("Imagen",imageUri)
        return (
            <TouchableOpacity style={styles.styleCell} onPress= {this.props.onPress}>
            
            <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }

}