//  Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    console.log('Function started...');
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');

    // Using try-catch to handle any errors that may occur during the fetch process
    try {
        console.log('Fetching data...');
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        console.log('Parsing json()');
        // Parse the json response using await response
        const tickets = await response.json();

        // If no tickets are found and the array is empty, throw a custom error
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets');
        }
        console.log('Displaying tickets...');
        ticketContainer.innerHTML = ' ';
        // Display tickets
        tickets.forEach(ticket => {
            const ticketElement = document.createElement('div');
            ticketElement.classList.add('Ticket');
            ticketElement.innerHTML = `<h3>${ticket.id}</h3>
            <p> Customer Name: ${ticket.userId}</p>
            <p> Issue Description: ${ticket.title}</p>
            <p>${ticket.body}</p>`;
            ticketContainer.appendChild(ticketElement);
        });
        errorMessage.textContent = ' ';
    }
    catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

// Call the function when the page is loaded
document.addEventListener('Ticket container loaded', fetchTickets);

// Task 3: Display Tickets Dynamically on the Page