import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import './User-Item.css';

function UserItem({user}) {
    return (
        <ListItem button className="listItem">
            <div className="userContainer">
                <div className="userName">
                    {user['node']['name'] ? user['node']['name'] : 'NO NAME'}
                </div>
                <div className="userDescription">
                    {user['node']['bio']? user['node']['bio']: 'NO DESCRIPTION'}
                </div>
            </div>
            <div className="prCount">
                PR Count: {user['node']['pullRequests']['totalCount']}
            </div>
        </ListItem>
    );
}

export default UserItem;