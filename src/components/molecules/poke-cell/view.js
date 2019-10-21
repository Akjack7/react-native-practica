
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
        return (
            <TouchableOpacity style={styles.styleCell} onPress={() => this.props.onPokemonPress(this.props.item)}>
            
            <Text style={styles.styleCellText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

}