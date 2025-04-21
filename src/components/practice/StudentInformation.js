
const StudentTable = ({ data }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Student List</h2>
      <table className="table table-bordered" data-custom="student-list">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>School Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.schoolName}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default StudentTable;