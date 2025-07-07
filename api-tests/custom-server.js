require('regenerator-runtime/runtime');

const mockUserAuth = require('mock-user-auth/app');
const app = mockUserAuth || require('express')();

// healthcheck route
app.get('/api/v1/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
