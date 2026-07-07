const ticketsPath = () => "/tickets";
const ticketPath = (ticketId: string) => `/tickets/${ticketId}`;
const homePath = () => "/";
const ticketEditPath = (ticketId: string) => `/tickets/${ticketId}/edit`;
const signUpPath = () => "/sign-up";
const signInPath = () => "/sign-in";
const forgotPasswordPath = () => "/forgot-password";
const resetPasswordPath = () => "/reset-password";

const accountProfilePath = ()=> "/account/profile";
const accountPasswordPath = ()=> "/account/password";

export { 
    ticketsPath, 
    ticketPath, 
    homePath, ticketEditPath, 
    signUpPath, 
    signInPath, 
    forgotPasswordPath, 
    accountProfilePath, 
    accountPasswordPath,
    resetPasswordPath
};