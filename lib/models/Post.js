const pool = require('../utils/pool');
module.exports = class Secret {
  id;
  description;

  constructor(row) {
    this.id = row.id;
    this.description = row.description;
  }
  static async getAllPosts() {
    const { rows } = await pool.query(
      `
                SELECT * FROM posts
                `
    );

    return rows.map((row) => new Secret(row));
  }

  static async postNewPost({ description }) {
    const { rows } = await pool.query(
      `
        INSERT INTO posts (description)
        VALUES ($1)
        RETURNING *
        `,
      [description]
    );
    return new Secret(rows[0]);
  }
};
