import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <div
                    key={user.id}
                >
                    {user.mark}
                    <br/>
                    {user.title}@The Practicle Dev. Sep 10
                     <br/>
                     {user.discription}
                     <br/>
                      author:{ user.auther}
                      <br/>
                      {user.mark}
                      <br/>
                      {user.discription}
                      <br/>
                     {user.name} <img src = {user.src} alt="none" /> 
                     <br/>
                      {user.info}
                        <br/>
                      { user.url}
                     </div>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps)(UserList);
