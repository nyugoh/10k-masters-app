import React, {Component} from 'react';
import { Segment, Label, Header, Progress, Grid } from 'semantic-ui-react';

class ProgressBar extends Component {
    render() {
        return (
            <Segment className={'center aligned'}>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column className={'right aligned'}>
                            <Header as={'h4'}>Hours Done :: <Label pointing={'left'} color={'green'}>45:30</Label></Header>
                        </Grid.Column>
                        <Grid.Column className={'left aligned'}>
                            <Header as={'h4'}>Sessions :: <Label pointing={'left'} color={'green'}>50</Label></Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1} centered>
                        <Grid.Column width={'ten'}>
                            <Progress value='4' total='5' progress='percent' active={true} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default ProgressBar;
