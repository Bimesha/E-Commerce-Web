// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to protect routes for authenticated users
const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] || req.header('Authorization'); // Handle both header formats;
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' }); //Access denied. No token provided.
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info (e.g., userId, role) to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

// Middleware to protect admin-only routes
const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next();
};

module.exports = { 
    authenticateUser, 
    authorizeAdmin 
};
