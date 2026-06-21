const ticketsPath = () => "/tickets";
const ticketPath = (ticketId: string) => `/tickets/${ticketId}`;
const homePath = () => "/";
const ticketEditPath = (ticketId: string) => `/tickets/${ticketId}/edit`;

export { ticketsPath, ticketPath, homePath, ticketEditPath };