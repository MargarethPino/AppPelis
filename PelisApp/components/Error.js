import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
    errorText1: PropTypes.string,
    errorText2: PropTypes.string,
};
  
const defaultProps = {
    errorText1: 'Oh, no! algo salio mal.',
    errorText2: 'Verifica tu conexion a internet.',
};
  
class Error extends React.PureComponent {
    render() {
      const {errorText1, errorText2} = this.props;
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{errorText1}</Text>
          <Text style={styles.text}>{errorText2}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffc0cb',
    },
    text: {
      fontWeight: 'bold',
      color: '#ffffff',
    },
  });

    Error.propTypes = propTypes;
    Error.defaultProps = defaultProps;
    export default Error;
    