### Application Login
***
#### New skill
User adds a new skill on skills/add, and it appears on skills/list

#### Add progress for that skill
User clicks on the name/subject of the skill and app navigates to skills/:id/:name. From here the user should be able to add progress about what they have been doin.

## Session progress login


When app loads, **New** session is started. if there's already a existing session, it picks from there. When the **START** button is clicked, it changes text to **STOP** , and activates, **PAUSE** button.

1. **START** button pressed.
    - Activate **PAUSE** button
    - Change it's text to **STOP**
    - Dispatch start session
    - Dispatch new session is none
    - Set session state to *in-progress*
2. **PAUSE** button pressed
    - Change text to **RESUME**
    - Dispatch pause action
    - Set session state to *paused*
3. **RESUME** button pressed
    - Change text to **PAUSE**
    - Dispatch resume action
    - Set session state to *in-progress*
4. **STOP** button clicked
    - Set session state to *completes*
    - Dispatch complete-session action
    - Disable  **PAUSE** button
    - Show a dialog to collect session message

### Session states and buttons
A session will maintain it's state and can only be in one state. The possible states to have include *in-progress*, *paused*, *completed* and *new*.

##### *in-progress*
   - [ ] Pause button active
   - [ ] Stop button active

#### *paused*
    - [ ]