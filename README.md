# Quiz - EU Capitals

## About the Project
A browser-based multiple-choice quiz that tests users on their knowledge of European Union capital cities. It is built using HTML, CSS, and JavaScript. It offers a clean UI, real-time feedback, a score count throughout the quiz and a final score summary included in an end of quiz message.
<img width="2594" height="1308" alt="Screenshot 2025-07-29 at 19 19 02" src="https://github.com/user-attachments/assets/f2e014c2-6dd4-464c-9dcd-dc5dadf7c11c" />

## Features
### Question line 
The question line provides 27 randomized questions, one for each current EU member state. A new question is loaded with a 0.5s delay upon selecting an answer for the current question. 
Once all 27 questions have been answered, an end of quiz message appears instead of the question line.
### Multiple choice answer section
The quiz follows a multiple choice format with four answer options per question. The answer is a choice between four cities based in the respective EU country. 
On devices with hover capability the answer buttons are responsive upon hovering, in that they change their background color, are slightly enlarged and framed by a border. 
Upon selecting an answer the user receives immediate feedback for correct and incorrect answers. For correct answers the answer button's background appears green. For incorrect answers the answer button's background appears in red.
Simultaneous to the question line, four new answer buttons are provided with a 0.5s delay upon selecting an answer for the current question. 
### Live Score
Underneath the question line and answer section a live score tracking of all correct answers is provided. Once all 27 questions have been answered, an end of quiz message appears with a total score instead of the live score.
### End of quiz message with final score
Once all 27 questions have been answered, the question line, answer section and live score are replaced by an end of quiz message congratulating the user on the completion of the quiz. The message includes the Information on the score reached.
### Restart button
Included underneath the end of quiz message the user is provided with a button to restart the quiz. 
As with the answer buttons, on devices with hover capability the restart the quiz button is responsive upon hovering, in that it changes its background color, is slightly enlarged and framed by a border.
Once the restart the quiz button has been clicked the quiz will resume with the 27 questions newly randomized and a score reset to zero.

## Potential additional features in the future
- Show correct answer even if incorrect answer was selected
- Progress indicator or bar (i.e. "4/27", or a bar filling up upon progress)
- Timer or a countdown for each question
- Sound effects for correct/incorrect answers
- Local saving of high scores
- Navigation for keyboard users

## Design & Layout
- Responsive design for mobile and desktop
- Accessible design with ARIA attributes and semantic HTML
- Minimalist styling using Calibri as font, sans serif font as backup, and EU colors and the EU flag as a background and favicon.

## Testing
### Manual Testing
| What is being tested                                                                | Expected Outcome                                                         | Actual outcome             |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------|----------------------------|
| Quiz loads on page open                                                             | First question and 4 answer buttons are shown                            | Works, as expected |
| Answering a question correctly                                                      | Selected answer button turns green, score increases by 1                 | Works, as expected |
| Answering a question incorrectly                                                    | Selected answer button turns red, score remains the same                 | Works, as expected |
| Answering buttons disabled after selection (timeout time for test increased to 2s)  | All answer buttons become disabled after a selection                     | Works, as expected |
| Buttons reset for next question                                                     | Buttons are re-enabled and colors cleared before the next question                                                                            | Works, as expected |
| Score increases correctly                                                           | Score updates with each correct answer                                                                                                        | Works, as expected |
| Final score and message displayed at the end of the quiz (after 27 questions)       | Quiz end message with correct score shown, quiz and score section hidden                                                                      | Works, as expected |
| Restart button resets the quiz                                                      | Questions are randomized, score resets to 0, first question appears                                                                           | Works, as expected |
| Questions randomize on restart                                                      | Order of questions is differenz each time the quiz is restarted                                                                               | Works, as expected |
| Responsive layout on different screen sizes                                         | Quiz layout adjusts properly on mobile/tablet/desktop                                                                                         | Works, as expected |
| Hover effect on buttons (only on devices with hover capability with mouse/cursor)   | Upon hovering cursor appears as a pointer, the button changes its background color, enlarges and shows a border with EU themed color (yellow) | Works, as expected |

### Lighthouse Testing

### Validator Testing

### Fixed Bugs
- On mobile devices the hover effect stayed on the latest selected answer button. This bug was fixed using a media query.
- Spelling mistakes of city names (i.e. Tallinn and Brussels) were corrected.
- Meta description and Keyword tags were added for SEO. 

### Unfixed Bugs

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
1. Go to the **Settings** tab in the GitHub repository
2. In the sidebar on the left select **Pages** (Code and automation section)
3. Ensure to:
- select "Deploy from a branch" under source 
- select "main" under Branch
- set the folder to "/ root"
4. Click **save** (located in Branch section)
5. Return to the "<> Code" tab 
6. Refresh the page after a couple of minutes, until a new section "Deployments" is available in the sidebar on the right
7. Click on **github-pages** in this new section 
8. The link to the latest deployment is accessible through a link in a box at the top of the page 

The live link to the Cleanup & Connect website is accessible here - https://jene87.github.io/p2-quiz-eu-capitals/

## Credits
### Code

### Content & Media
- The background image was downloaded from the open source site pixabay (pixabay.com), user: OpenClipart-Vectors.
- The European Union flag Favicon was downloaded from [Favicon.io](https://favicon.io/emoji-favicons/flag-european-union/).
- Colors and color scheme were chosen based on information on colors of the EU system by the [European Commission](https://ec.europa.eu/component-library/v1.15.0/eu/components/detail/eu-style-color/)
  - #003776 (EC blue 120)
  - #ffd617 (EC yellow 100)
- The list of EU countries and their capitals were taken from the European Union website: [Easy to read – about the EU](https://european-union.europa.eu/easy-read_en).
- All incorrect answers (3 cities per country) were searched for by the author using [Google Maps](https://www.google.com/maps).
