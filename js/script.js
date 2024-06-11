function showAddRowForm() {
    document.getElementById('addRowForm').classList.remove('hidden');
}

function hideAddRowForm() {
    document.getElementById('addRowForm').classList.add('hidden');
}

function showRemoveRowForm() {
    document.getElementById('removeRowForm').classList.remove('hidden');
}

function hideRemoveRowForm() {
    document.getElementById('removeRowForm').classList.add('hidden');
}

// The code above shows and hides the forums when the cancel button is clicked

function removeRowByNumber(rowNumber) { // When you add a row it will show the number in which you can use to remove it
    const table = document.getElementById('userTableBody');
    const rowIndex = rowNumber - 1;  
    if (rowIndex >= 0 && rowIndex < table.rows.length) {
        table.deleteRow(rowIndex);
    }
}

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRow();
    hideAddRowForm();
});

function addRow() { // This function pulls the elements by using textContent creates a form for the user to input his/her data and add them to the table
    const firstName = document.getElementById('inputFirst').value;
    const lastName = document.getElementById('inputLast').value;
    const handle = document.getElementById('inputHandle').value;

    const table = document.getElementById('userTableBody');
    const rowCount = table.rows.length;
    const newRow = table.insertRow(rowCount);

    const cell1 = newRow.insertCell(0); // cells are just table rows/columns
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = rowCount + 1; // adds +1 from the last row count 4 -> 5
    cell2.textContent = firstName; 
    cell3.textContent = lastName;
    cell4.textContent = handle;

    document.getElementById('inputForm').reset(); // resets the form once submit is pressed
}
