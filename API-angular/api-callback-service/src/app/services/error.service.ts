import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  errorHandler(err: HttpErrorResponse) {
    if (err.status == 400) {
      console.log(
        "Oops! It seems like there's something wrong with your request. Please check the URL, headers, and data you're sending and try again"
      );
    } else if (err.status == 401) {
      console.log(
        'Access Denied! You must provide valid credentials to access this resource. Please log in or authenticate to continue'
      );
    } else if (err.status == 403) {
      console.log(
        'Forbidden Access! You dont have permission to view this page or resource. Contact the administrator if you believe this is in error.'
      );
    } else if (err.status == 404) {
      console.log(
        'Page Not Found! The page or resource youre looking for doesnt exist. Double-check the URL and try searching again'
      );
    } else if (err.status == 500) {
      console.log(
        'Internal Server Error! Something went wrong on our end. Were working hard to fix it. Please try again later.'
      );
    } else if (err.status == 502) {
      console.log(
        'Bad Gateway! The server received an invalid response from an upstream server while processing your request. Please try again later.'
      );
    } else if (err.status == 503) {
      console.log(
        'Service Unavailable! Sorry, the server is temporarily unable to handle your request. Please try again later'
      );
    } else if (err.status == 505) {
      console.log(
        'HTTP Version Not Supported! The server does not support the HTTP protocol version used in the request. Please upgrade your client or contact support.'
      );
    } else if (err.status == 418) {
      console.log(
        'Im a Teapot! This error is intentionally humorous and indicates that the server refuses to brew coffee because it is, in fact, a teapot. Have some tea instead!'
      );
    }
  }
}
