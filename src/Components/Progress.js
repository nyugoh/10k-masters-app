import React, {Component} from 'react';
import { Segment, Label, Header, Progress, Grid, Rating } from 'semantic-ui-react';

class ProgressBar extends Component {
    render() {
        return (
            <Segment className={'center aligned'}>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column className={'right aligned'}>
                            <Header as={'h4'}>Hours Done :: <Label pointing={'left'} style={{backgroundColor: this.props.skill.theme}}>45:30</Label></Header>
                        </Grid.Column>
                        <Grid.Column className={'left aligned'}>
                            <Header as={'h4'}>Sessions :: <Label pointing={'left'} style={{backgroundColor: this.props.skill.theme}}>50</Label></Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} centered>
                        <Grid.Column width={'ten'} className={'center aligned'}>
                            <Progress value='4' total='5' progress='percent' style={{backgroundColor: this.props.skill.theme}} color={'green'} active={true} />
                            <Header as={'h4'}>Milestones achieved <Rating icon='star' defaultRating={1} maxRating={3} size={'massive'} disabled/></Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default ProgressBar;
