import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import './Repository-Item.css';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

function RepositoryItem({repository, user}) {
    return (
        <ListItem className="listItem">
            <div className="repositoryContainer">
                <div className="rightRepositoryContainer">
                    <Grid container justify="center" alignItems="center">
                        <Avatar alt="Remy Sharp" src={user['avatarUrl']} className="avatarImg" />
                    </Grid>
                </div>
                <div className="leftRepositoryContainer">
                    <div className="repositoryName">
                        {repository['node']['name']}, {user['location']}
                    </div>
                    <div className="repositoryDescription">
                        {user['login']} #Commits {repository['node']['commitComments']['totalCount']}
                    </div>
                </div>
            </div>
        </ListItem>
    );
}

export default RepositoryItem;