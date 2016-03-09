/**
 * Created by carlosrenoj on 2/26/16.
 */


// import dependencies
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;


// create components
var DayItem = React.createClass({
    render: function(){
        return <Text style={this.style()}>
            {this.props.day}
        </Text>
    },

    style: function(){
        return {
            color: this.color(),
            fontWeight: this.fontWeight(),
            fontSize: this.fontSize(),
            lineHeight: this.lineHeight()
        }
    },

    color: function(){
        var opacity = '1';
        //if(this.props.daysUnitl != 0){
        //    var opacity = 1/this.props.daysUntil;
        //        console.log(opacity);
        //}

        return 'rgba(0,0,0,'+ opacity+ ')';
    },

    fontWeight: function(){
        var weight = 7 - this.props.daysUntil;
            weight = weight*100
        return weight.toString();
    },

    fontSize: function(){
        return 60 - 6*this.props.daysUntil;
    },

    lineHeight: function(){
        return 70 - 4 * this.props.daysUntil;
    }
});




// make this available elsewhere
module.exports = DayItem;