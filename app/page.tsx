"use client";

import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(HELLO_QUERY);

  if (loading) return <p className='text-center mt-8'>Loading...</p>;
  if (error)
    return (
      <p className='text-center mt-8 text-red-500'>Error: {error.message}</p>
    );

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <h1 className='text-4xl font-bold mb-8'>
        Welcome to Next.js with GraphQL!
      </h1>
      <p className='text-xl'>GraphQL Query Result: {data.hello}</p>
    </main>
  );
}
