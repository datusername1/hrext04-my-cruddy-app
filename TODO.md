# MVP
- [√] store items
 - [√] create new item
 - [√] select item
 - [√] edit/update item
 - [√] delete item


 # Detail Todo
 - [ ] Front End
   - [√] display items
   - [√] enter new item
   - [√] select item for edit
   - [√] select item for delete
   - [√] a form!

   - [ ] UI/UX
     - [ ] Confirmation of delete/update
     - [ ] Sortable list
     - [ ] Navigation/Pagination
     - [ ] Mouse over Preview
     - [ ] Searching/Filtering
     - [ ] Animations/Transitions

  - [ ] Library Considerations
    - [ ] underscore
    - [√] jquery
    - [ ] moment.js
    - [ ] c3.js (charts.js)

 ## Next Steps

  - [ ] factor out common functionality
  - [ ] testing


  ## Feature list
  * denotes on my to do for the project
  2.5 days = 20 hours

  ### difficulty scale 1-10. 1 meaning it's already finished 10 meaning what?!?!

  5 = 3 hours
  7 = 5 hours
  10 = full day + ??


  *(5) add due date
  *(7) time stamps (moment.js)
  (5) format the display of the items in a list (need to add more detail)
  (??) fix the layout
  (7) color coded priority
  highlight certain items
  mouse over to see details
  ability to select and delete multiple items (checkbox?)
  add status/priorty and allow for sorting based on status/priority
  Item categories
  ability to add/leave comments on item
  upload files/images
  share item
  drag and drop to arrange
  search/filter on keyup/keydown
  reminders? (push operation?)
  secret corgi
  delete item confirmation
  fillet edges of boxes
  font changes/choices? (google fonts)
  Panic Button
  Highlight based on status/priority/due date
  options page (ability to set/toggle options)
  show deleted items and allow for undelete
  pagination (if more than 10 show a next button)
  category pages (not really pages, just a show/hide trick)
  strike-through completed/deleted items (styling)
  add more items button, that shows another input section allowing for multiple items to be added at once
  Fun stuff
  auto-complete when searching/filtering


  My List of Todo:

  1. Add due date (5) -> could this be added in by user inside the Form input? time? 30 minutes? 
    a. An idea worth trying out
  7. A reminder option seems good... But how would you even set a reminder? How long would that take? Difficulty (9)
    a. Maybe there is a library that will be able to provide some additional function that I can pass thru jquery and JS to create this functionality. 
    b. This will probably be spent the least time on after finishing the other ideas and implementations 
    c. This should be a separate button that the user will use. 
    d. Will possible  be the longest. 

  2. Timestamp? Necessary? Possibly not, but can try and set the time so we know when how long ago the ToDo was created. (6)
    a. Provide an idea to the user how long ago it was created: maybe use the date? or created by? Already done it w/ twittler.
    b. Have to figure out a way to assign the time to the message that is created.
    c. Time: should take 1.5 hours or so since Twittler has code. Need to see reimplentation.

  3. Create checkmark for marking off completed item. => difficulty (6); Time: 2 hours average.
    a. Should be easy with checkmark box
    b. Set function() : on click and set check boxes to false at first. 
    c. Turn to true when click and when all true on('click', function() {return false}) for all; 
    d. Assign highlighted function and maybe sort with function to have check mark items to get pushed up the list? 
      i. This could be very difficult since need sort to check for function if checkmark => true, then sort and push? 
      ii. Let see what Dave & John will say. 
    e. When checkmark complete, there should be a strike through on the To-Do task. 

  4. The idea of confirmation delete before deleting the actual item from list. => difficulty (8) time: 3 - 4 hours
    a. Would this be set thru creating function that asks the user to confirm prior to deleting item from list to make sure that no accidental deletes.

  5. Design interface and make it something that you would use on regular basis. => mostly CSS will benefit from learning (4)
    a. Limit self to only an 1.5 hours. 

  6. Assignment to create mutliple To-Do list? Each pushing into a different div with new assigned <li> items in them. 
    a. Will provide useful experience for the user. 
    b. Implenetation? => function create newlIst => then push information into newArr? 
    c. Time: 3 hours

    TOTAL WORK HOURS: 12 - 14 hours. 
     Need additional time to restudy other materials.

  Do not make it complex, need to study and redo sprints from HREXT to full be ready for immersive. 









