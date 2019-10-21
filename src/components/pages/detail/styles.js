import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
    imageStyle: {
        height: 350,
        width: null,
        justifyContent: 'center',
    
    },

    container: {
        backgroundColor: colors.orange,
        width: '100%', height: '100%'
    
    },

    text : {
        marginVertical: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: 0,
    }

    ,

    abilities : {
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: 10,
    },
    abilitiesTitle : {
        marginVertical: 30,
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginTop: 0,
    },

    messageTitle : {
        marginTop: 50,
        marginVertical: 30,
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },

    comment : {
        
        padding:30,
        textAlign: 'center', 
        fontWeight: 'bold',
        color: colors.white,
    }

    
  });