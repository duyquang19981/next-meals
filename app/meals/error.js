// This file must be a client component.
// Nextjs basically ensures that any errors happen in client side will be catched
"use client"

// We can use a prop 'error' here
export default function Error() {
  return (
    <main className='error'>
      <h1>An error occurred!</h1>
      <p>Falied to fetch, please try again!</p>
    </main>
  );
}
