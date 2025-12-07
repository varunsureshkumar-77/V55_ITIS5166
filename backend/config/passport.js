import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import pool from './database.js';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [users] = await pool.query('SELECT id, email, first_name, last_name, google_id, auth_provider, avatar_url FROM users WHERE id = ?', [id]);
    if (users.length > 0) {
      done(null, users[0]);
    } else {
      done(new Error('User not found'), null);
    }
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists with this Google ID
        const [existingUsers] = await pool.query(
          'SELECT * FROM users WHERE google_id = ?',
          [profile.id]
        );

        if (existingUsers.length > 0) {
          // User exists, return user
          return done(null, existingUsers[0]);
        }

        // Check if user exists with same email
        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
        if (email) {
          const [emailUsers] = await pool.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
          );

          if (emailUsers.length > 0) {
            // Check if this is a local account (has password)
            if (emailUsers[0].auth_provider === 'local' && emailUsers[0].password) {
              // Do not allow account linking - prevent account hijacking
              return done(new Error('An account with this email already exists. Please login with your email and password instead.'), null);
            }
            
            // If it's already a Google account but different google_id, reject
            if (emailUsers[0].auth_provider === 'google' && emailUsers[0].google_id && emailUsers[0].google_id !== profile.id) {
              return done(new Error('An account with this email already exists with a different Google account.'), null);
            }
            
            // Update existing Google user (in case they're re-authenticating)
            await pool.query(
              'UPDATE users SET google_id = ?, avatar_url = ? WHERE id = ?',
              [profile.id, profile.photos && profile.photos[0] ? profile.photos[0].value : null, emailUsers[0].id]
            );
            
            const [updatedUsers] = await pool.query('SELECT * FROM users WHERE id = ?', [emailUsers[0].id]);
            return done(null, updatedUsers[0]);
          }
        }

        // Create new user
        const firstName = profile.name && profile.name.givenName ? profile.name.givenName : null;
        const lastName = profile.name && profile.name.familyName ? profile.name.familyName : null;
        const avatarUrl = profile.photos && profile.photos[0] ? profile.photos[0].value : null;

        const [result] = await pool.query(
          'INSERT INTO users (email, google_id, auth_provider, first_name, last_name, avatar_url) VALUES (?, ?, ?, ?, ?, ?)',
          [email, profile.id, 'google', firstName, lastName, avatarUrl]
        );

        const [newUser] = await pool.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
        return done(null, newUser[0]);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
