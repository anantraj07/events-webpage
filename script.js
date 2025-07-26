document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const location = document.getElementById('eventLocation').value;
    const description = document.getElementById('eventDescription').value;

    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');
    eventItem.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${description}</p>
    `;
    
    document.getElementById('eventsContainer').appendChild(eventItem);
    
    // Clear the form
    document.getElementById('eventForm').reset();
});

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('commentName').value;
    const comment = document.getElementById('commentText').value;

    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
        <strong>${name}</strong>
        <p>${comment}</p>
    `;
    
    document.getElementById('commentsContainer').appendChild(commentItem);
    
    // Clear the form
    document.getElementById('commentForm').reset();
});
