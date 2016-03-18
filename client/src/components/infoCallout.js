// info callout

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;

var styles = require('../assets/styles.js').calloutStyles;

var infoCallout = React.createClass({
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.bubble}>
            <View style={styles.stats}>
              {this.props.children}
            </View>
          </View>
      <View style={styles.arrow} />

      </View>
    );
  },
});



module.exports = infoCallout;