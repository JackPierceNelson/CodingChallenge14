//  Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const ticketContainer = document.getElementById('ticket-container');
    const errorMessage = document.getElementById('error-message');

    // Using try-catch to handle any errors that may occur during the fetch process
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        // Parse the json response using await response
        const tickets = await response.json();

        // If no tickets are found and the array is empty, throw a custom error
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets');
        }

        ticketContainer.innerHTML = ' ';
        // Display tickets
        tickets.forEach(ticket => {
            const ticketElement = document.createElement('div');
            ticketElement.classList.add('Ticket');
            ticketElement.innerHTML = `<h3>${ticket.title}</h3>
            <p>${ticket.body}</p>`;
            ticketContainer.appendChild(ticketElement);
        });
    }
    catch (error) {
        errorMessage.textContent = `Error: ${error.message}`;
    }
}

// Call the function when the page is loaded
document.addEventListener('Ticket container loaded', fetchTickets);