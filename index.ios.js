// import dependancies
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');



// creating a react component
var Weekdays = React.createClass({
    render: function () {
        return <View style={styles.container}>
            {this.days()}
        </View>
    },

    days: function(){
        var dayItems =[];
        for(var i=0; i<7; i++){
            var  day = Moment().add(i,'days').format('dddd');
            dayItems.push(
                <DayItem day={day} daysUntil={i} key={i} />
            )
        }
        return dayItems;
    }
});


// Style react component
var styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



// show react component on the screee

AppRegistry.registerComponent('weekdays', function(){
    return Weekdays
});