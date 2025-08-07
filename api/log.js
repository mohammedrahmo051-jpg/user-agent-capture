export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log(`${req.body.timestamp} - ${req.body.userAgent}`);
    res.status(200).json({ message: 'Logged' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
