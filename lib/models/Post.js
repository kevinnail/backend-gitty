const pool = require('../utils/pool');
module.exports = class Secret {
  id;
  description;

  constructor(row) {
    this.id = row.id;
    this.description = row.description;
  }
  static async getAllSecrets() {
    const { rows } = await pool.query(
      `
                SELECT * FROM posts
                `
    );

    return rows.map((row) => new Secret(row));
  }
};
