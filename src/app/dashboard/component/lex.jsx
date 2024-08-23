import React from 'react'

const url = "https://raw.githubusercontent.com/Lutonmac/myweb/main/myweb.json";

export  async function lex() {
  try {
    const data = await fetch(url);
    const response = await data.json(); // Await the json() call
    console.log(response); // Log the response after awaiting it

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

lex();
