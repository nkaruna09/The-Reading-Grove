// routes/books.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Search books
router.get('/search', async (req, res) => {
  const { query } = req.query;
  const books = await prisma.book.findMany({
    where: {
      title: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });
  res.json(books);
});

// Get book details
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await prisma.book.findUnique({
    where: { id: parseInt(id) },
  });
  res.json(book);
});

// Add book to user's list
router.post('/track', async (req, res) => {
  const { userId, bookId, status, progress, startDate } = req.body;
  const userBook = await prisma.userBook.create({
    data: {
      user_id: userId,
      book_id: bookId,
      status,
      progress,
      start_date: new Date(startDate),
    },
  });
  res.json(userBook);
});

// Update reading progress
router.put('/:id/progress', async (req, res) => {
  const { id } = req.params;
  const { progress } = req.body;
  const userBook = await prisma.userBook.update({
    where: { id: parseInt(id) },
    data: { progress },
  });
  res.json(userBook);
});

module.exports = router;
