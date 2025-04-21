const TableData = () => {
  return (
    <table class="table table-striped table table-hover border border-danger ">
      <thead>
        <tr class="table-danger">
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Second</th>
          <th scope="col">Third</th>
          <th scope="col">Fourth</th>
          <th scope="col">Fifth</th>
          <th scope="col">Sixth</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-info">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Coco1</td>
          <td>Nut1</td>
          <td>Bana1</td>
          <td>Cater1</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Coco2</td>
          <td>Nut2</td>
          <td>Bana2</td>
          <td>Cater2</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td>Coco1</td>
          <td>Nut1</td>
          <td>Bana1</td>
          <td class="table-success">Cater1</td>
        </tr>
        
      </tbody>
    </table>
  );
};
export default TableData;
