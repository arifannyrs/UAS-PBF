import React, {Component} from 'react';
import { connect } from 'react-redux';
import {goalRef} from '../../config';

class AddGoal extends Component {

    state = {
        title: ''
    }

    handleChange = e => {
        this.setState({
            title: e.target.value
        })
    };

    addGoal = () => {
        const { title } = this.state;
        const { signedInUser } = this.props.user;
        if(title !== '') {
            goalRef.push({
                signedInUser,
                title
            });
            console.log(this.state)
            this.setState({title: ''})
           }      
    }

    render() {
        return (
            <div className="container">                
             <div className="conatainer center">           
                <div className="row">
                    <form className="col s9" onSubmit={this.handleForm}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input type="text" name="email" id="addGoal" className="validate" value={this.state.title} onChange={this.handleChange}/>
                            <label htmlFor="addGoal">Add your goal</label>
                            </div>
                        </div>                      
                   </form>
                    <div className="col s2">
                        <div className="input-field">
                            <button className="btn blue darken-1 z-depth-0 waves-effect waves-light" onClick={this.addGoal}>Add</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    }
};

export default connect(mapStateToProps, null)(AddGoal);