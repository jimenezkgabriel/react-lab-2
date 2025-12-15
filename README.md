1. How did you handle state updates when the text changed?
> There is a useState in the App() that keeps track of the textfield's value.length for character count and another that useState in the App() that keeps track of word count by use the character count useState variable and splitting them per the spacebar. These useStates are passed into StatsDisplay as props so they're updated therein, that way I can update the color of the text for word count if it hits the minimum word count and also feedback if it exceeds the maximum word count.

2. What considerations did you make when calculating reading time?
> I just had to kinda Google this one, I take take the character count and divide it by a time-length unit, the higher it is, the slower you "read"

3. How did you ensure the UI remained responsive during rapid text input?
> I used Material UI and set breakpoints for viewport widths. I rearranged the stats display to be column display when viewport is on mobile size. The textfield was provided by Material UI and I categorized it as a textarea so there's a scroll bar if the text exceeds the texarea's height bounds

3. What challenges did you face when implementing the statistics calculations?
> Calculating the word count was a challenge, calculating a "time it takes to read" each word was a challenge, I implented the character counter component within the stats display component and found a new challenge to render a color change feedback in the stats display based on the character counter component's props... though the props were of default values so it implies you pass your own properties. These properties are housed in a variable stored somewhere in the stats display tsx file. These variables is what I use to do a conditional to change the color of the text for the feedback