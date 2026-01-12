export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),

    // ⬇️ NOVO – zamena za deprecated expiresIn
    sessions: {
      // access token (admin panel)
      accessTokenLifespan: 60 * 30, // 30 min

      // maksimalno trajanje sesije (hard limit)
      maxSessionLifespan: 60 * 60 * 24 * 30, // 30 dana

      // maksimalno trajanje refresh tokena
      maxRefreshTokenLifespan: 60 * 60 * 24 * 30, // 30 dana

      // idle limiti (opciono, ali preporučujem)
      idleSessionLifespan: 60 * 60, // 1 sat neaktivnosti
      idleRefreshTokenLifespan: 60 * 60 * 24 * 7, // 7 dana
    },
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});