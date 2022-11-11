// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const client = await MongoClient.connect(
    //   ''
    // );
    const client = new MongoClient(
      'your_uri_here'
    );
    const db = client.db();

    const blogsCollection = db.collection('blogs');
    const result = await blogsCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: 'blog inserted successfully' });
  }
}

export default handler;
