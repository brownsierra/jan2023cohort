// Open Terminal
//    (In VS Code) Terminal> New Terminal
//    Open Git Bash
// Navigate to your Desktop
//     (When opening terminal, I see that I'm currently in ~/OneDrive/Desktop/CodingDojo/jan2023cohort)
//     cd ..
//     cd ..
// Create a new directory, call it 'test'
//      mkdir test
// Make files called index.html, style.css, commands.txt inside the test directory
//     touch index.html
//     touch style.css
//     touch commands.txt
// Make a copy of index.html and call it index_2.html
//     cp index.html index_2.html
// Navigate back to you desktop and make another directory, call it destination
//    cd .. 
//    mkdir destination
// Move the index_2.html file to the 'destination' directory
//    cd ..
//    cd test
//    mv index_2.html ..
//    cd ..
//    mv index_2.html destination 
// In the 'test' directory, remove the 'styles.css' file
//    cd ..(to get from ~/OneDrive/Desktop/directory back to ~/OneDrive/Desktop)
//    cd test
//    rm style.css 
// Now, check and see what files are in the 'test' and 'destination' directories
//    ls (shows commands.txt and index.html in 'test' folder)
//    cd .. (gets us back to Desktop folder)
//    cd destination
//    ls (shows index_2.html in 'destination' folder)
// Remove/delete the 'destination' directory
//    rm -rf destination (got error message when entering this code, I used rmdir instead)