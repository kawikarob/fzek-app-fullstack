const selectAllExercises = `
        SELECT 
            *
        FROM
            exercises
        WHERE 
           exercises.name LIKE ?
        ORDER BY 
            ?;
   `;

module.exports = selectAllExercises;
