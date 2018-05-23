import React, {Component} from 'react';
import { Comment, Label, Header, Icon } from 'semantic-ui-react';

class Activities extends Component {
    render() {
        return (
            <div>
                <Comment.Group threaded>
                    <Header as='h3' dividing>Activity Timeline <Icon name={''}/></Header>
                    <Comment>
                        <Comment.Group>
                            <Comment>
                                <Icon style={{position: 'absolute', left: -40, top:20, color: this.props.skill.theme }} name={'crosshairs'}/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                    <Comment.Metadata>
                                        <span>Yesterday at 12:30AM</span>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <p>This has been very useful for my research. Thanks as well!</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                            <Comment>
                                <Icon style={{position: 'absolute', left: -40, top:20, color: this.props.skill.theme }} name={'bullseye'}/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                    <Comment.Metadata>
                                        <span>Just now</span>
                                    </Comment.Metadata>
                                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                    <Comment.Actions>
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>

                            <Comment>
                                <Icon style={{position: 'absolute', left: -40, top:20, color: this.props.skill.theme }} name={'selected radio'}/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                    <Comment.Metadata>
                                        <span>5 days ago</span>
                                    </Comment.Metadata>
                                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                    <Comment.Actions>
                                        <a>Reply</a>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        </Comment.Group>
                    </Comment>
                </Comment.Group>
            </div>
        );
    }
}

Activities.propTypes = {};

export default Activities;
