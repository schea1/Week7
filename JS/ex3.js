//Declare studentList Array
const studentList = [
  {
  firstName: "Allan",
  lastName: "Able",
  scores: [95, 85, 92, 98]
  },
  {
  firstName: "Amy",
  lastName: "Alexander",
  scores: [80, 88, 100]
  },
  {
  firstName: "Betty",
  lastName: "Barns",
  scores: [70, 80, 90, 100]
  },
  {
  firstName: "Bob",
  lastName: "Bones",
  scores: [75, 85, 95, 85]
  },
  {
  firstName: "Cindy",
  lastName: "Chase",
  scores: [95, 90, 92, 98]
  },
  {
  firstName: "Charles",
  lastName: "Chips",
  scores: [88, 99, 90]
  },
  ];
  // TO DO - Write higher order functions / There are many solutions
  //Declare cLastNameResults. Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)

  const cLastNameResults = studentList
  .filter(student => student.lastName.startsWith('C'))
  .map(student => {
      const { firstName, lastName, scores } = student;

      // Calculate the min score
      const minScore=scores.reduce((min, score) => (score < min ? score:min), scores[0]);

      // Calculate the max score
      const maxScore=scores.reduce((max, score)=>(score>max?score:max),scores[0]);

      // Calculate the average score
      const averageScore=scores.reduce((sum, score)=>sum+score,0)/scores.length;

      return {
          firstName,
          lastName,
          minScore,
          maxScore,
          averageScore
      };
  });

console.log(cLastNameResults);